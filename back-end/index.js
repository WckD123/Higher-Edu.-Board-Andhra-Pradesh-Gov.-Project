const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const store = require('./store');
var bodyParser = require('body-parser');


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
 * Create User POST request handler.
 * First Checks whether the user exists and if not creats a new user.
 * Returns created user details or existing user details.
 */

 app.post('/api/login', function(req,res) {
    store.getUser({
        'email':req.body.email
    }).then(function(results) {
        if (results.length > 0) {
            // User exists. Return.
            return res.status(200).send({"user":results[0]});
        } else {
            // user doesn't exist. Create user and return.
            store.createUser({
                name:req.body.name,
                email:req.body.email,
                li_education_latest:req.body.li_education_latest,
                li_experience_latest:req.body.li_experience_latest,
                li_profile_link:req.body.li_profile_link
            }).then(function(results) {
                return res.status(200).send({
                    "user": {
                        "id":results[0],
                        "name":req.body.name,
                        "email":req.body.email,     
                    }
                });    
            }).catch(function(error) {
                console.log(error)
                return res.status(200).send({"error":{"code":"2001", "message":"DB Error. Please check post parameters"}});
            })
        }

    }).catch(function(error) {
        console.log(error);
        return res.status(200).send({"error":{"code":"2001", "message":"DB Error. Please check post parameters"}});
    })
 });

 /**
  * Get User based on id
  */
 app.get('/api/userforid/:id', function(req,res) {
    store.getUserForId({
        id:req.params["id"]
    }).then(function(results){
        return res.status(200).send(results);
    }).catch(function(error) {
        return res.status(200).send({"error":{"code":"2001", "message":"DB Error. Please check post parameters"}});
    });
 });

/**
 * Get User based on email
 */
app.get('/api/userforemail/:email', function(req,res) {
    store.getUser({
        email:req.params["email"]
    }).then(function(results){
        return res.status(200).send(results);
    }).catch(function(error) {
        return res.status(200).send({"error":{"code":"2001", "message":"DB Error. Please check post parameters"}});
    });
});

/**
 * Upload Doc POST API.
 * Upload a doc for owner_id
 * Upload the document metada as well as the content for the created doc in apt. table.
 */
app.post('/api/docs/uploaddoc/', function(req,res) {
    var doc_name = req.body.doc_name;
    if (req.body.doc_type == 1) {
      // Admission SOP, Create the name.
      doc_name = req.body.university + "," + req.body.degree;  
    }
    store.getUserForId({
        id:req.body.owner_id
    }).then(function(results){
        var owner = results[0];
        store.createDoc({
            owner_id:req.body.owner_id,
            owner_name:owner['name'],
            owner_li_link:owner['linkedin_public_profile_link'],
            doc_type:req.body.doc_type,
            doc_name:doc_name,
            country:req.body.country,
            university:req.body.university,
            department:req.body.department,
            degree:req.body.degree,
            year_of_admission:req.body.year_of_admission
        }).then(function(results){
            // Add the questions and answers to doc content table.
            req.body.content_arr.forEach(function (valueDict) {
                console.log("Sop question : %s, Sop Answer : %s", valueDict.sop_question, valueDict.sop_answer);
            })
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
                            "id":results[0],
                            "doc_name":doc_name
                        }
                    });
                }).catch(function(error) {
                    console.log(error);
                    return res.status(200).send({"error":{"code":"2001", "message":"DB Error. Please check post parameters"}}); 
                })
        }).catch(function(error) {
            console.log(error);
            return res.status(200).send({"error":{"code":"2001", "message":"DB Error. Please check post parameters"}});
        })
    }).catch(function(error) {
        console.log(error);
        return res.status(200).send({"error":{"code":"2001", "message":"No such user exists. Please check owner_id parameter"}}); 
    });
})


/**
 * Get API to return all the uploaded docs. First doc will have its content 
 * loaded as well.
 */
app.get('/api/docs/uploadeddocs/:user_id', function(req,res) {
    store.uploadedDocuments({
        user_id:req.params['user_id']
    }).then(function(results) {
        var docs = results;
        if (docs.length > 0) {
            var firstDocId = docs[0]['id'];
            store.docContent({
                doc_id:firstDocId
            }).then(function(results) {
                docs[0]['content_arr'] = results;
                return res.status(200).send(docs);
            }).catch(function(error) {
                console.log(error);
                return res.status(200).send({"error":{"code":"2001", "message":"DB Error. Please check post parameters"}});     
            });
        } else {
            return res.status(200).send(results);
        }
    }).catch(function(error) {
        console.log(error);
        return res.status(200).send({"error":{"code":"2001", "message":"DB Error. Please check post parameters"}});     
    });
});

/**
 * Doc content for a doc_id.
 */
app.get('/api/docs/doccontent/:doc_id', function(req,res) {
    store.docContent({
        doc_id:req.params['doc_id']
    }).then(function(results) {
        return res.status(200).send(results);
    }).catch(function(error) {
        console.log(error);
        return res.status(200).send({"error":{"code":"2001", "message":"DB Error. Please check post parameters"}});             
    });
});


/**
 * Record Transaction.
 */
app.post('/api/transactions/recordtransaction', function(req,res) {
    var buyer_id = req.body.buyer_id;
    var doc_ids = req.body.doc_ids;
    var payment_reference_id = req.body.payment_reference_id;
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
        res.status(200).send({"msg":"Transaction successfully recorded."});
    }).catch(function(error) {
        console.log(error);
        return res.status(200).send({"error":{"code":"2001", "message":"DB Error. Please check post parameters"}});                     
    });
});

/**
 * Get Purchased documents for a user_id.
 * Returns the document metadata of all the purchased documents and content of first document.
 */
app.get('/api/docs/purchaseddocs/:user_id', function(req,res) {
    store.purchasedDocumentIds({
        user_id:req.params['user_id']
    }).then(function(results){
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
                        return res.status(200).send({"error":{"code":"2001", "message":"DB Error. Please check post parameters"}});     
                    });
                } else {
                    return res.status(200).send(docs);
                }        
             }).catch(function(error) {
                console.log(error);
                return res.status(200).send({"error":{"code":"2001", "message":"DB Error. Please check post parameters"}});                             
             });
        } else {
            // No purchased docs just return.
            res.status(200).send(results);
        }
    }).catch(function(error) {
        console.log(error);
        return res.status(200).send({"error":{"code":"2001", "message":"DB Error. Please check post parameters"}});                     
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
        return res.status(200).send({"error":{"code":"2001", "message":"DB Error. Please check post parameters"}});
    });
});

module.exports = app;

app.set('port', process.env.PORT || 3000);
var server = app.listen(app.get('port'), function() {
    var port = server.address().port;
    console.log('Example app listening at http://localhost:%s', port);
});