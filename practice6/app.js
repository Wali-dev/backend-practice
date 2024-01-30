const express = require('express');
const app = express();
const circleRouter = require("./routes/areaCircle.route")
const rectangleRouter = require('./routes/areaRectangle.route')

app.use(circleRouter, rectangleRouter);


app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/pages/homepage.html')
})




module.exports = app;