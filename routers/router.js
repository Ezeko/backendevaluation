const express = require('express');
const router = express.Router();
const home = require('../controllers/HomeController')
const create = require('../controllers/StoryController')
const AdminController = require('../controllers/AdminController')
const UserController = require('../controllers/UserController')




router.get('/', home.gate);

router.post('/create', create.createStory)

router.get('/users/stories/{user}', UserController.getStories)

router.get('/admin/stories/:user', AdminController.getStories)




module.exports = router;