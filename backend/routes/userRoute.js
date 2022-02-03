const express = require('express');
const router = express.Router();
const userControlles = require('../controllers/userControllers');

router.post('/new', userControlles.inserNewUser);
router.post('/find', userControlles.userFind);
router.post('/get-users', userControlles.getAllUserFromDb);

module.exports = router;
