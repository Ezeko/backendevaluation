
const express = require('express'); //import express
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const Router = require('./routers/router')
require('custom-env').env();
const mysql = require('mysql')

const Sequelize = require('sequelize');


const path = process.env.DB_URL;
const conn = new Sequelize(path,{operatorsAliases: false});
    conn.authenticate().then(()=>{
        console.log('Connected with sequelize')
    }).catch((err)=>{
        console.log(err)
    }).finally(()=>{
        conn.close();
    }
    )

const con = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD
})
 con.connect((err)=>{
     if (err){
         throw err
     }
     console.log('connected')
 })
    //cross origin resources share
    app.use((req, res, next) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
        next();
      });
   app.use(cors());
   app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/', Router);

//app.use('/api/auth')

module.exports = app;
