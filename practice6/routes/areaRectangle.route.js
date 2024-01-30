const express = require('express');
const router = express.Router();
const path = require('path');
const bodyParser = require('body-parser');


router.use(bodyParser.urlencoded({ extended: false }))
router.use(bodyParser.json())


router.get('/rectangle', (req, res)=>{
    res.sendFile(path.join(__dirname, '../pages/rectangleArea.html'))
})

router.post('/rectangle',(req, res)=>{
    const height = req.body.height;
    const width = req.body.width;
    const area = height*width;

    res.send(`<h2>The area of the rectangle is ${area} meter square</h2>`);
})

module.exports = router;
