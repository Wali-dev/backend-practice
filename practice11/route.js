const express = require('express');
const { getProduct, addProduct, updateProduct, deleteProduct } = require('./controller');
const router = express.Router();




router.get("/", getProduct)
router.post("/", addProduct)
router.put("/:id", updateProduct)
router.delete("/:id", deleteProduct)

module.exports = router;