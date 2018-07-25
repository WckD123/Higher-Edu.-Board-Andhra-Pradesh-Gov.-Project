const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const store = require('./store');
var bodyParser = require('body-parser');
var auth = require('./auth');
var config = require('./config')
var VerifyToken = require('./VerifyToken');
var Linkedin = require('node-linkedin')(config.LINKEDIN_CLIENT_ID, config.LINKEDIN_CLIENT_SECRET, config.LINKEDIN_CALLBACK_URL);
var randomstring = require("randomstring");
var resterrors = require('./resterrors')

var app = express();
app.use(express.static('public'))
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

//TODO: Check Later.
var corsOptions = {
    origin:"http://localhost:3001",
    optionSuccessStatus:200
}
app.use(cors(corsOptions));


/**
 * Client call for login with linkedin.
 */
app.get('/api/login',function(req,res) {
    Linkedin.auth.authorize(res,config.LI_SCOPE,config.LI_STATE);
})

/**
 * LinkedIn callback call.
 */
app.get('/oauth/linkedin/callback', function(req,res) {
    if (!req.query.code) {
        // TODO:
        console.log('USER DENIED ACCCESS');
        return res.redirect('/');
    }
    else {
        Linkedin.auth.getAccessToken(res, req.query.code, req.query.state, function(err, result) {
            if ( err ) {
                // TODO:
                console.error(err);
                return res.redirect('/');
            }
            // Got a valid access token.
           var linkedin = Linkedin.init(result['access_token']);
           // Fetch the user details.
            linkedin.people.me(function(err, $in) {
                // TODO:
                if (err) {
                    console.log(err);
                    return res.redirect('/');
                }
                // Loads the profile of access token owner.
                var email = $in['emailAddress'];
                store.getUserForEmail({
                    email:email
                }).then(function(results) {
                    if (results.length > 0) {
                        var user_id = results[0]['id'];
                        // Update.the user with the email id
                        store.updateUserForEmail({
                            email:email,
                            name:$in['formattedName'],
                            li_headline:$in['headline'],
                            li_profile_link:$in['publicProfileUrl'],
                            pictureUrl:$in['pictureUrl']
                        }).then(function(result) {
                            console.log("result after updation : "+result);
                           var token =  auth.getToken({
                                user_id:user_id,
                                email:email
                            });
                           res.status(200).send({'auth_token':token}); 
                        }).catch(function(error) {
                            //TODO:
                            console.log(error);
                            return res.redirect('/');
                        })
                    } else {
                        // Insert the user with all the details including access_token.
                        store.createUser({
                            name:$in['formattedName'],
                            email:$in['emailAddress'],
                            li_headline:$in['headline'],
                            li_profile_link:$in['publicProfileUrl'],
                            pictureUrl:$in['pictureUrl']                            
                        }).then(function(result) {
                            console.log("result after creation : " + result);
                            var token =  auth.getToken({
                                user_id:result,
                                email:$in['emailAddress']
                            });
                            res.status(200).send({'auth_token':token});
                        }).catch(function(error) {
                            //TODO:
                            console.log(error);
                            return res.redirect('/');
                        })
                    }
                }).catch(function(error) {
                    //TODO:
                    console.log(error);
                    return res.redirect('/');
                })
               
            });
        });
    }
});

 /**
  * Get User based on id
  * Autenticated call with middelware - VerifyToken
  */
 app.get('/api/userdetails',VerifyToken,function(req,res) {
    store.getUser({
        id:req.loggedInUserId,
        email:req.loggedInUserEmail
    }).then(function(results){
        return res.status(200).send(results);
    }).catch(function(error) {
        return res.status(501).send(resterrors(501, error))
    });
 });

/**
 * Upload Doc POST API.
 * Upload a doc for owner_id
 * Upload the document metada as well as the content for the created doc in apt. table.
 */
// TODO: 
app.post('/api/docs/uploaddoc/', VerifyToken,function(req,res) {
    var doc_name = req.body.doc_name;
    if (req.body.doc_type == 1) {
      // Admission SOP, Create the name.
      doc_name = req.body.university + "," + req.body.degree;  
    }
    store.getUser({
        id:req.loggedInUserId,
        email:req.loggedInUserEmail
    }).then(function(results){
        var owner = results[0];
        store.createDoc({
            owner_id:req.loggedInUserId,
            owner_name:owner['name'],
            owner_li_link:owner['li_profile_link'],
            owner_pictureUrl:owner['li_picture_url'],
            doc_type:req.body.doc_type,
            doc_name:doc_name,
            country:req.body.country,
            university:req.body.university,
            degree:req.body.degree,
            year_of_admission:req.body.year_of_admission
        }).then(function(results) {
            // Add the questions and answers to doc content table.
            // req.body.content_arr.forEach(function (valueDict) {
            //     console.log("Sop question : %s, Sop Answer : %s", valueDict.sop_question, valueDict.sop_answer);
            // })
            const doc_id = results[0];
            var content_arr = [];
            req.body.content_arr.forEach(function (valueDict) {
                var finalDict = {};
                finalDict["doc_id"] = doc_id;
                finalDict["sop_question"] = valueDict.sop_question;
                finalDict["sop_answer"] = valueDict.sop_answer;
                content_arr.push(finalDict); 
            })
             store.createDocContent({
                 doc_id : doc_id, 
                 content_arr : content_arr
                }).then(function(results){
                    return res.status(200).send({
                        "doc":{
                            "id":doc_id,
                            "doc_name":doc_name
                        }
                    });
                }).catch(function(error) {
                    console.log(error);
                    return res.status(501).send(resterrors(501, error)); 
                })
        }).catch(function(error) {
            console.log(error);
            return res.status(501).send(resterrors(501, error));
        })
    }).catch(function(error) {
        console.log(error);
        return res.status(501).send(resterrors(501, error)); 
    });
})


/**
 * Get API to return all the uploaded docs. First doc will have its content 
 * loaded as well.
 */
// app.get('/api/docs/uploadeddocs',VerifyToken, function(req,res) {
//     store.uploadedDocuments({
//         user_id:req.loggedInUserId
//     }).then(function(results) {
//         var docs = results;
//         if (docs.length > 0) {
//             var firstDocId = docs[0]['id'];
//             store.docContent({
//                 doc_id:firstDocId
//             }).then(function(results) {
//                 docs[0]['content_arr'] = results;
//                 return res.status(200).send(docs);
//             }).catch(function(error) {
//                 console.log(error);
//                 return res.status(501).send(resterrors(501, error));    
//             });
//         } else {
//             return res.status(200).send(results);
//         }
//     }).catch(function(error) {
//         console.log(error);
//         return res.status(501).send(resterrors(501, error));     
//     });
// });

app.get('/api/docs/uploadeddocs', VerifyToken, function(req,res) {
    store.uploadedDocs({
        user_id:req.loggedInUserId
    }).then(function(results) {
        var documents_dict = {};
        var documents_arr = [];
        //console.log(results);
        for (var i=0;i<results.length;i++) {
            // If key doesn't exit then add.
            if (!documents_dict[results[i]['id']]) {
                var document = {};
                document['id'] = results[i]['id']
                document['country'] = results[i]['country']
                document['university'] = results[i]['university']
                document['degree'] = results[i]['degree']
                document['year_of_admission'] = results[i]['year_of_admission']
                document['doc_type'] = results[i]['doc_type']
                document['doc_name'] = results[i]['doc_name']
                document['content_arr'] = [
                    {
                        "sop_question":results[i]['sop_question'],
                        "sop_answer":results[i]['sop_answer']
                    }
                ];
                documents_dict[results[i]['id']] = document; 
            } else {
                // key exists just add the sop_question and answer to content_arr.
                var document = documents_dict[results[i]['id']];
                var content_arr = document['content_arr'];
                content_arr.push( {
                    "sop_question":results[i]['sop_question'],
                    "sop_answer":results[i]['sop_answer']
                })
                document['content_arr'] = content_arr;
                documents_dict[results[i]['id']] = document;
            }
        }
        for (var key in documents_dict) {
            documents_arr.push(documents_dict[key]);
        }
        return res.status(200).send(documents_arr);
    }).catch(function(error) {
        console.log(error);
    })
});

/**
 * Doc content for a doc_id.
 */
app.get('/api/docs/doccontent/:doc_id',VerifyToken ,function(req,res) {
    store.docContent({
        doc_id:req.params['doc_id']
    }).then(function(results) {
        return res.status(200).send(results);
    }).catch(function(error) {
        console.log(error);
        return res.status(501).send(resterrors(501, error));             
    });
});


/**
 * Record Transaction.
 */
app.post('/api/transactions/recordtransaction',VerifyToken, function(req,res) {
    var buyer_id = req.loggedInUserId;
    var doc_ids = req.body.doc_ids;
    var payment_reference_id = randomstring.generate(10);
    var final_transaction_arr = []
    doc_ids.forEach(function(doc_id) {
        var doc_dict = {};
        doc_dict["buyer_id"] = buyer_id;
        doc_dict["doc_id"] = doc_id;
        doc_dict["payment_reference_id"] = payment_reference_id;
        final_transaction_arr.push(doc_dict);
    })
    store.recordTransaction({
        transaction_arr:final_transaction_arr
    }).then(function(results) {
        res.status(200).send({"payment_reference_id":payment_reference_id,"msg":"Transaction successfully recorded."});
    }).catch(function(error) {
        console.log(error);
        return res.status(501).send(resterrors(501, error));                     
    });
});

/**
 * Update Transaction status
 */

 app.get('/api/transactions/updatetransaction',VerifyToken, function(req,res) {
    var payment_reference_id = req.query['payment_reference_id']
    var status = parseInt(req.query['status'])
    var razorpay_payment_id = req.query['razorpay_payment_id']
    store.updateTransactionStatus({
        payment_reference_id,
        status,
        razorpay_payment_id
    }).then(function(results) {
        store.transactionAmount({payment_reference_id})
        .then(function(results) {
            console.log(results);
            // TODO: Assuming a transaction contains documents bought from a single person.
            owner_id = results[0]['owner_id']
            trxAmount = results[0]['SUM(price)'] 
            store.updateTotalEarnings({owner_id, trxAmount})
            .then(function(results) {
                return res.status(200).send({"msg":"Transaction updated successfully"})
            }).catch(function(error) {
                console.log(error);
                return res.status(501).send(resterrors(501, error)); 
            })
        }).catch(function(error) {
            console.log(error);
            return res.status(501).send(resterrors(501, error)); 
        })
    }).catch(function(error) {
        console.log(error);
        return res.status(501).send(resterrors(501, error)); 
    })
 })

/**
 * Get Purchased documents for a user_id.
 * Returns the document metadata of all the purchased documents and content of first document.
 * Added authentication middleware4
 */
// TODO: Join sop_doc and transactions table to get documents metadata in one go and then get first document content.
app.get('/api/docs/purchaseddocs/',VerifyToken, function(req,res) {
    store.purchasedDocumentIds({
        user_id:req.loggedInUserId
    }).then(function(results) {
        if (results.length > 0) {
             //Get the documents metadata for doc_ids in results.
             var document_ids = [];
             results.forEach(function(dict) {
                document_ids.push(dict["doc_id"])
             })
             store.documentsMetadataforDocIds({
                 doc_ids:document_ids
             }).then(function(documents) {
                // Get the content for first document.
                var docs = documents;
                if (docs.length > 0) {
                    var firstDocId = docs[0]['id'];
                    store.docContent({
                        doc_id:firstDocId
                    }).then(function(results) {
                        docs[0]['content_arr'] = results;
                        return res.status(200).send(docs);
                    }).catch(function(error) {
                        console.log(error);
                        return res.status(501).send(resterrors(501, error));    
                    });
                } else {
                    return res.status(200).send(docs);
                }        
             }).catch(function(error) {
                console.log(error);
                return res.status(501).send(resterrors(501, error));                             
             });
        } else {
            // No purchased docs just return.
            res.status(200).send(results);
        }
    }).catch(function(error) {
        console.log(error);
        return res.status(501).send(resterrors(501, error));                     
    });
});

/**
 * Search - Searches Document Name,Country,University,Degree,Year of Admission
 */
app.get('/api/search', function(req,res) {
    console.log("search_text : %s", req.query['search_text']);
    store.search({
        search_text:req.query['search_text']
    }).then(function(results) {
        return res.status(200).send(results);
    }).catch(function(error) {
        console.log(error);
        return res.status(501).send(resterrors(501, error));
    });
});

/**
 * Update the acccount credentials for the logged in user.
 */
app.post('/api/updateaccount',VerifyToken,function(req,res) {
    store.updateAccount({
        user_id:req.loggedInUserId,
        account_number:req.body.account_number,
        ifsc_code:req.body.ifsc_code
    }).then(function(result) {
        console.log(result);
        return res.status(200).send({"rows_udpated": result});
    }).catch(function(error) {
        console.log(error);
        return res.status(501).send(resterrors(501, error));
    })
});

/**
 * Get the account status of the logged in user.
 */
app.get('/api/accountstatus',VerifyToken ,function(req,res) {
    store.getAccountStatus({
        user_id:req.loggedInUserId
    }).then(function(results) {
        return res.status(200).send(results[0]);
    }).catch(function(error) {
        console.log(error);
        return res.status(501).send(resterrors(501, error));
    })
})

// TODO: Sample code. Should be removed.
app.get('/', function(request, response){
   response.sendFile('./index.html');
});

module.exports = app;

app.set('port', process.env.PORT || 3000);
var server = app.listen(app.get('port'), function() {
    var host = server.address().host; 	
    var port = server.address().port;
    console.log('Example app listening at http://localhost:%s', port);
});
