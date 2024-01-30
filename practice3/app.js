const express = require('express');
const app = express();
const userRouter = require('./routes/route.user')


app.use(userRouter);

app.get('/', (req, res)=>{
    res.send("this is it")
})



app.use((req, res)=>{
    res.end("<h1>404</h1><p>There is no such defined route</p>")
})



module.exports = app;