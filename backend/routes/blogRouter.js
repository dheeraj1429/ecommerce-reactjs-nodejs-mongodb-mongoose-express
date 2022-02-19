const express = require('express');
const router = express.Router();
const blogControllers = require('../controllers/blogControllers');

router.post('/create', blogControllers.postBlog);

module.exports = router;
