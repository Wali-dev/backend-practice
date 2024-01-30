const express = require('express');
const router = express.Router();


router.get("/register", (req, res)=>{
    res.send("This is the Registration page")
})

router.get("/login", (req, res)=>{
    res.send("This is the Login Page")
})

module.exports = router;