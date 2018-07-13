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


// TODO: Check if the code following these lines are still valid.
var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: false });




 
/*

app.post('/login', urlencodedParser, function (req, res) {
  if (!req.body) return res.sendStatus(400)
  res.send('welcome, ' + req.body.username)
})

*/
 

const connection = mysql.createConnection({
    host: 'localhost',
    user : 'root',
    password : 'password',
    database : 'GettInn',
    multipleStatements: true
});


connection.connect(err => {
    if(err){
        console.log("Error connecting to Database")
        return err + "Connection ErrorError";
    }
    else {
        console.log("Database is connected")
    }
});


app.get('/users/getAllData', (req,res) => {
    connection.query('SELECT * FROM users', (q_err, q_res) => {
        if(q_err){
            return res.send(q_err)
        }
        else{
            return res.json(q_res)
        }
    })
});


app.post('/uploadDocument', jsonParser , (req, res) =>{

    connection.query("Insert into admission_sop_doc (id, university, country, degree, department, price_band, total_sales, year_of_admission, type ) VALUES (null,'"+req.body.University+"','"+req.body.Country+"','"+req.body.Degree+"','"+req.body.Department+"','"+req.body.PriceBand+"', 0 ,'2018','"+req.body.Type+"')", function(err, result)      
    {                                                      
      if (err)
         throw err;
      else {
        console.log(req.body.QuesAnswers);
        //connection.query("Insert into doc_content")
      }
    });

    
    //console.log(University, Country, Department, Degree, PriceBand );
});

///


app.get('/uploadedDocs/', jsonParser, (req, res) =>{
    var uploaded = {}
	//var sql =  ?;SELECT * FROM admission_sop_doc WHERE owner_id = ?";
	connection.query("SELECT * FROM admission_sop_doc WHERE owner_id = '"+req.body.user_id+"' ", (q_err, q_res) => {
        if(q_err){
            return res.send(q_err);
        }
        else{
            uploaded = {...uploaded, q_res};
        }
    })
    connection.query("SELECT * FROM fellowship_sop_doc WHERE owner_id = '"+req.body.user_id+"' ", (q_err, q_res) => {
        if(q_err){
            return res.send(q_err);
        }
        else{
            uploaded = {...uploaded, q_res};
        }
    })
});

app.get('/documentContent/:doc_id', jsonParser, (req, res) =>{
	connection.query("SELECT * FROM doc_content WHERE doc_id = '"+req.body.doc_id+"'", (q_err, q_res) => {
        if(q_err){
            return res.send(q_err)
        }
        else{
            return res.json(q_res)
        }
    })
});



/*Incase fellowship docs are mentioned separately
app.get('/fellowshipContent/:doc_id', jsonParser, (req, res) =>{
	connection.query("SELECT * FROM doc_content WHERE doc_id = '"+req.body.doc_id+"'", (q_err, q_res) => {
        if(q_err){
            return res.send(q_err)
        }
        else{
            return res.json(q_res)
        }
    })
});
*/

app.get('/boughtDocs', jsonParser, (req, res) =>{
	connection.query("SELECT doc_id FROM transactions WHERE buyer_id = '" +req.body.user_id+ "'", (q_err, q_res) => {
        if(q_err){
            return res.send(q_err)
        }
        else{
            return res.json(q_res)
        }
    })
});

app.post('/recordTransaction/', jsonParser , (req, res) =>{

    connection.query("Insert into transactions (id, doc_id, buyer_id, payment_reference_id) VALUES (null, '"+req.body.doc_id+"', '"+req.body.buyer_id+"', '"+req.body.payment_reference_id+"')", function(err, result)      
    {                                                      
      if (err)
         throw err;
    });

});





///
const shivam = {
    name : "Shivam Agarwal",
    Age : 22
}

app.get('/', (req, res) => {
    res.json(shivam)
});

module.exports = app;

app.set('port', process.env.PORT || 3000);
var server = app.listen(app.get('port'), function() {
    var port = server.address().port;
    console.log('Example app listening at http://localhost:%s', port);
});