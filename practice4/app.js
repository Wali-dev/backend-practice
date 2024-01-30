const express = require('express');
const userRouter = require('./routes/user.router');
const productRouter = require('./routes/products.router.js')
const navigationRouter = require('./routes/navigation.router')
const app = express();

app.use(navigationRouter);
app.use(productRouter);
app.use("/user",userRouter);    /* Using /user here will led to a slight change in our url, before
                                  we use to write 9000/registration but, now we have to write 9000/user/register 
                                  to access the regestraion page. Its because we have used /user before using our userRoute.*/



app.get("/", (req, res)=>{
    res.send("Welcome to the homepage") //This route will give us the default homepage
})

app.use((req, res)=>{
    res.end("<h1>ERORR 404<h1>") // This route will give us the certain route which is not defined. Like /gugu, is nowhere to be found
})


module.exports = app;