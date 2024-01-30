const express = require('express');
const app = express();
const mongoose = require('mongoose');


const PORT = 9000;


app.use(express.json());
app.use(express.urlencoded({ extended: true }))

// schema
const testSchema = new mongoose.Schema({
    title: String,
    price: Number,
    description: String,
    createdAt:{
        type: Date,
        default: Date.now
    }
})

// creating models 

const Testing = mongoose.model("tests", testSchema);

app.post("/test", (req, res)=>{

    try {

        const newTesting = new Testing({
            title: req.body.title,
            price: req.body.price,
            description: req.body.description
        })


        newTesting.save();
        res.send("success");
        
    } catch (error) {

        res.status(500).send(error.message)
        
    }
})

//connect db

const connectDB = async() =>{

    try {

        await mongoose.connect('mongodb://127.0.0.1:27017/practice13');
        console.log("db is now connected")
        
    } catch (error) {

        console.log("db is not connected");
        console.log(error.message);
        process.exit(1);
        
    }

}





app.listen(PORT, async()=>{
    console.log(`The server is running on http://localhost:${PORT}`)
   await connectDB();
})

app.get("/", (req, res)=>{
    res.status(200).sendFile(__dirname + '/index.html')
})

