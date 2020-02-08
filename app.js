const create = require('./controllers/StoryController')
const AdminController = require('./controllers/AdminController')
const UserController = require('./controllers/UserController')
const home = require('./controllers/HomeController')
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

app.get(('/', home.gate));

//user get stories

app.get('/users/stories/{user}', UserController.getStories)

app.post('/create', create.createStory)

app.get('/admin/stories/:user', AdminController.getStories)



module.exports = app;
