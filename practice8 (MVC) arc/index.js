
const express = require('express');
const bodyParser = require('body-parser');
const userRouter = require('./routes/user.routes')
const productRouter = require("./routes/product.routes")

const app = express();
const PORT = 9000;


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.use(userRouter);
app.use(productRouter)








app.listen(PORT, ()=>{
    console.log(`The server is running on http://localhost:${PORT}`)
})