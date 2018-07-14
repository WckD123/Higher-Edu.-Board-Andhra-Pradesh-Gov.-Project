const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
var bodyParser = require('body-parser');


const app = express();

app.use(cors({origin: 'http://localhost:3000'}));

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
        return err + "Connection ErrorError";
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


app.listen(4000, () => {
    console.log("We are working on port 4000")
});

app.get('/', (req, res) => {
    res.json(shivam)
});