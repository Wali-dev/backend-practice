const path = require('path');
const shoes = require('../models/shoes.model');


exports.getShoe = (req,res)=>{
    res.sendFile(path.join(__dirname + '/../views/shoe.html'))
};

exports.saveShoe = (req, res)=>{

    const name = req.body.shoeName;
    const size = Number(req.body.size);

    const shoe ={
        name,
        size,
    }
   
    shoes.push(shoe);

    res.json(shoes)
    
    
}