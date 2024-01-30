const express = require('express');
const router = express.Router();
const { getProduct, saveProduct } = require('../controllers/product.controllers');






router.get('/product', getProduct)

router.post("/product", saveProduct)

module.exports = router;