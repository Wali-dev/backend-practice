const path = require('path');
const bags = require('../models/bags.model')


exports.getBag = (req,res)=>{
    res.sendFile(path.join(__dirname + '/../views/bags.html'))
};

exports.saveBag = (req, res)=>{

    const name = req.body.bagName;
    const size = Number(req.body.size);

    const bag ={
        name,
        size,
    }
   
    bags.push(bag);

    res.json(bags)
    
    
}