//core modules
const path = require('path');
//third-party modules
const express = require('express');

const router = express.Router();
const adminController = require('../controllers/admin');

router.get('/add-product' , adminController.getAddProduct);

router.get('/products', adminController.getProduct);

router.post('/add-product' , adminController.postAddProduct);

router.get('/edit-product/:productId' ,adminController.getEditProduct);

module.exports = router;
