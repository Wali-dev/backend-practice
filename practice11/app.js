const express = require('express');
const app= express();
const userRouter = require('./route')
const bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())







app.use(userRouter);

app.use((req, res)=>{
    res.send("404")
})




module.exports = app;