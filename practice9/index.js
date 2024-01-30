const express = require('express');
const PORT = 9000;
const app = express();
const shoeRouter = require('./routes/shoe.route');
const bagRouter = require('./routes/bags.route')
const jacketRouter = require('./routes/jackets.route')
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(express.static('/views'))

app.use(shoeRouter);
app.use(bagRouter);
app.use(jacketRouter);


app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/views/index.html')
})


app.listen(PORT, ()=>{
    console.log(`The server is running on http://localhost:${PORT}`)
})


