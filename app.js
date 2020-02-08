
const express = require('express'); //import express
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const Router = require('./routers/router')
require('custom-env').env();




    //cross origin resources share
    app.use( async (req, res, next) => {
        await res.setHeader('Access-Control-Allow-Origin', '*');
        await res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
        await res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
        next();
        return
      });
   app.use(cors());
   app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/', Router);



module.exports = app;
