const express = require('express');
const router = express.Router();
let path = require('path')


router.get("/register", (req, res)=>{
    res.sendFile(path.join(__dirname, '..', 'pages', 'registration.html'))
})

router.get("/login", (req, res)=>{
    res.sendFile(path.join(__dirname, "../pages/login.html"))
})
module.exports = router;