const express = require('express');
const router = express.Router();
const userControlles = require('../controllers/userControllers');

router.post('/new', userControlles.inserNewUser);
router.post('/find', userControlles.userFind);
router.post('/get-users', userControlles.getAllUserFromDb);
router.post('/changeUserInfo', userControlles.changeUserInfoData);

module.exports = router;
