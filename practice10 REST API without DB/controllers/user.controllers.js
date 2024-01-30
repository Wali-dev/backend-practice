const path = require('path')
const {v4: uuidv4} = require("uuid");
let users = require('../models/user.models');


const allUser= (req,res)=>{
    res.sendFile(path.join(__dirname, "../views/users.html"))
}

const newUser = (req, res)=>{

    const newUser ={
        id: uuidv4(),
        name: req.body.name,
        email: req.body.email

    };
    users.push(newUser)
    res.json(users)
}

const updateUser = (req, res)=>{
    const userid = req.params.id;

    const {name, email} = req.body;

    users.filter((user)=>user.id === userid).map((selecteduser)=>{
            selecteduser.name = name;
            selecteduser.email = email;
        }
    )
    
    res.json(users)

}

const deleteUser = (req, res)=>{
    const userid = req.params.id;

   const filterData = users.filter((user)=>user.id != userid);

   users = filterData;

   res.json(users);
}
    

module.exports = {allUser, newUser, updateUser, deleteUser}