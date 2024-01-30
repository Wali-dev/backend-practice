const express = require('express');
const router = express.Router();

router.get("/product", (req, res)=>{
    res.json({
        "name": "Biriany",
        "name":"Korma"
    }
   
    )
})






module.exports = router;