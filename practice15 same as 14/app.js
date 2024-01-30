const express = require('express');
const app = express();
require('./config/db');
const userRouter = require('./routes/user.routes')


app.use(express.json());
app.use(express.urlencoded({extended : true}))



app.use("/api", userRouter);




app.get("/", (req, res)=>{
    res.sendFile(__dirname + "/./views/index.html")
})
app.use((req, res)=>{
    res.status(404).send("<h2>There is no such route</h2>")
})

module.exports = app;