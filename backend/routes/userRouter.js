const express = require('express');
const router = express.Router();
const userControllers = require('../controllers/userControllers');

router.post('/new', userControllers.newUser);
router.post('/find', userControllers.findUserSignUp);

module.exports = router;
