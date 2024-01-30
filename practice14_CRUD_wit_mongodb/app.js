const express = require('express');
const app = express();
const cors = require('cors');
const userRouter = require('./routes/user.route')
require("./config/db")




app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.use("/api", userRouter)



 







app.get("/",(req, res)=>{
    res.sendFile(__dirname + "/./views/index.html")
})
app.use((req, res, next)=>{
    res.status(500).send({message: "The server is not found"})
})









module.exports= app;