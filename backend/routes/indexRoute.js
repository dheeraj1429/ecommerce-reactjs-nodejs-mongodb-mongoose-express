const express = require('express');
const router = express.Router();

const indexControllers = require('../controllers/indexControllers');

router.post('/search', indexControllers.serchProduct);
router.post('/new', indexControllers.createProducts);
router.post('/get/all', indexControllers.fetchAllProducts);

module.exports = router;
