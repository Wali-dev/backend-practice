const express = require('express');
const mongoose = require('mongoose');




const PORT = 9000;

const app = express();

app.use(express.json());

//create schema


const productSchema = new mongoose.Schema({

    title: {
        type: String,
    
    },
    price: Number,
    description: String,
    createdAt:  {
        type: Date,
        default: Date.now
    }
})

const Product = mongoose.model("Products", productSchema);


app.get('/', (req, res)=>{
    res.send("This is the homepage")
})

app.post("/products", (req, res)=>{
    try {

         
        
        const newProduct  = new Product({

            title : req.body.title,
            price : req.body.price,
            description : req.body.description
        })

        newProduct.save();


        res.send("success")
    } catch (error) {

        res.status(500).send({message: error.message})
        
    }

})

const connectDb = async()=> {
    try {

      await mongoose.connect('mongodb://127.0.0.1:27017/practiceTest')

      console.log("database is connected")

        
    } catch (error) {

        console.log("database is not connected")
        console.log(error.message)
        process.exit(1)
    }
}




app.listen(PORT, async()=>{
    console.log(`The server is running on http://localhost:${PORT}`)
    await connectDb();
    
})