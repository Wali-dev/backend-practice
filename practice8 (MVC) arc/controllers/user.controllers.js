const path = require('path');
const users = require('../models/users.models');

exports.getUser = (req, res)=>{
    res.sendFile(path.join(__dirname + '/../views/user.html'))
};

exports.saveUser = (req, res)=>{
    const name = req.body.fullName;  
    const age = Number(req.body.age);
    const user = {
        name,
        age,
    }
    users.push(user)
    res.json(users)
};