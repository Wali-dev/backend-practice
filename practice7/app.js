const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(express.static("public")); //this express.static middleware is used to serve static file.

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/public/index.html')
})


app.post('/',(req, res)=>{

    const firstName = req.body.firstName;
    const lastName = req.body.lastName;


    res.send(`Hello ${firstName} ${lastName}, thank you for submitting your information so that we can exploit you.`)
})








app.use((req, res)=>{
    res.send("<h2>error, there is no such route</h2>")
})



module.exports = app;