const express = require('express');
const cors = require('cors');
const mysql = require('mysql');

const app = express();

app.use(cors({origin: 'http://localhost:3001'}));

const connection = mysql.createConnection({
    host: 'localhost',
    user : 'root',
    password : 'password',
    database : 'GettInn'
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

// Still working on this part, All GET Functions have similar structure. Now I just have to get the POST and UPDATE Functions to work...
/*
app.get('/uploadDocument', (req, res, next) =>{
    const {University, Country, Content, Degree, Department, PriceBand} = req.body;

    connection.query('INSERT INTO documentTable(University, Country, Content,Degree, Department, PriceBand) VALUES($1, $2, $3, $4, $5)',
    [University, Country, Content, Degree, Department, PriceBand],
    
)
});

*/


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