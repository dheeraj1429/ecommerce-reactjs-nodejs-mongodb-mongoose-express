const express = require('express');
const router = express.Router();
const userControlles = require('../controllers/userControllers');

router.post('/new', userControlles.inserNewUser);
router.post('/find', userControlles.userFind);
router.post('/get-users', userControlles.getAllUserFromDb);
router.post('/changeUserInfo', userControlles.changeUserInfoData);
router.post('/send-newsletter', userControlles.sendNewsletter);
router.post('/forget-password', userControlles.userForgetPassword);
router.post('/reset-password', userControlles.userResetPassword);

module.exports = router;
