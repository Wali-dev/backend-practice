const express = require('express');
const app = express();
const userRoute = require('./routes/user.route')
const productRouter = require('./routes/product.route')
const stallRouter = require('./routes/stall.route')



app.use(userRoute, productRouter, stallRouter);

app.get("/", (req, res)=>{
    
    res.sendFile(__dirname+"/pages/home.html");
    // res.sendStatus(200);
    
    
})


app.use((req, res)=>{
    res.end("<h1>ERROR 404</h1>")
})


module.exports = app;