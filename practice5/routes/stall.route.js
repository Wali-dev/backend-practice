const express = require('express');
const router = express.Router();
const path = require('path');



router.get("/stalls", (req, res)=>{
    res.sendFile(path.join(__dirname, '../pages/stall.html'))
})


module.exports = router;