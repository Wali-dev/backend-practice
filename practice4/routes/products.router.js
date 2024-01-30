const express = require('express');
const router = express.Router();


router.get("/products", (req, res)=>{
    res.send("This is the page for products")
})




module.exports = router;