const express = require('express');
const router = express.Router();


router.get("/login",(req, res)=>{
    res.send("This is the LogIn page")
})

router.get("/register",(req, res)=>{
    res.send("This is the Registration page")
})


module.exports = router;