const express = require('express');
const router = express.Router();
const home = require('../controllers/HomeController')
const create = require('../controllers/StoryController')
const AdminController = require('../controllers/AdminController')




router.get('/', home.gate);

router.post('/create', create.createStory)

router.get('/admin/stories/{user}', AdminController.getStories)




module.exports = router;