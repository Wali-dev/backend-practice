const bodyParser = require('body-parser');
const express = require('express');
const router = express.Router();
const path = require('path');


router.use(bodyParser.urlencoded({ extended: false }))
router.use(bodyParser.json())


router.get("/circle", (req, res)=>{
    res.sendFile(path.join(__dirname, '../pages/circleArea.html'))
})

router.post('/circle', (req, res)=>{
    const radius = req.body.radius;
    const area = 0.5*3.14*(radius*radius);

    res.send(`<h2>The area of the circle is ${area} meter square</h2>`)

})

module.exports = router;