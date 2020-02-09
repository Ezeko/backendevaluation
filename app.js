const create = require('./controllers/StoryController')
const AdminController = require('./controllers/AdminController')
const UserController = require('./controllers/UserController')
const home = require('./controllers/HomeController')
const express = require('express'); //import express
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
//const Router = require('./routers/router')
require('custom-env').env();




    //cross origin resources share
    /*app.use( async (req, res, next) => {
        //return res.setHeader('Access-Control-Allow-Origin', '*');
         res.setHeader(
          'Access-Control-Allow-Headers', 
          'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization'
        );
       res.setHeader(
         'Access-Control-Allow-Methods', 
         'GET, POST, PUT, DELETE, PATCH, OPTIONS'
       );
        next();
        return;
      });*/
   app.use(cors());
   app.use(express.json());
   app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', home.gate);

//user get stories

app.get('/api/users/stories/{user}', UserController.getStories) 

app.post('/api/create', create.createStory)

app.get('/api/admin/stories/{user}', AdminController.getStories)
app.put('/api/admin/stories/update', AdminController.updateStory); //send all parameters with form
app.delete('/api/admin/stories/delete/:id', AdminController.deleteStory);



module.exports = app;
