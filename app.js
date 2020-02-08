
const express = require('express'); //import express
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const Router = require('./routers/router')
require('custom-env').env();




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

app.use('/create', Router);

module.exports = app;
