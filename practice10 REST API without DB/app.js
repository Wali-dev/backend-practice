const express = require('express');
const app = express();
const userRouter = require('./routes/user.routes')
const bodyParser =  require('body-parser');
const cors = require('cors');


app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(userRouter)




app.use((req,res)=>{
    res.send("This route does not belongs")
})
module.exports = app;






