const express = require('express');
const router = express.Router();
const home = require('../controllers/HomeController')
const create = require('../controllers/StoryController')

router.get('/', home.gate);

router.post('/', create.createStory)




module.exports = router;