const express = require('express');
const router = express.Router();


router.get('/navigation', (req,res)=>{
    res.send("This is the page for Navigation")
})

module.exports = router;