const User = require("../models/user.model");
const { v4:uuidv4} = require('uuid');




const getAllUser = async (req, res)=>{
    const users = await User.find();
    res.status(201).json(users);
};

const createNewUser = async (req, res)=>{

    try {
        const createUser = new User({

            id: uuidv4(),
            name: req.body.name,
            age: Number(req.body.age),
    
        })
        await createUser.save();
    
        res.status(201).json(createUser)
    } catch (error) {
        
        res.status(500).send(error.message)
    }


}

const getOneUser = async (req, res)=>{

    const id = req.params.id;
    const thatuser = await User.findOne({id});
    res.status(201).json(thatuser);
};

const updateUser = async (req, res)=>{



    try {
        const id = req.params.id;
        const user = User.findOne({id});
        user.name = req.body.name;
        user.age = Number(req.body.age);
       //
        user.save();
        res.status(201).json(user)

    } catch (error) {
        
        res.status(500).send(error.message)
    }


}

const deleteUser = async (req, res)=>{

    try {
        const id = req.params.id;
    await User.deleteOne({id});
   await res.status(201).send("The user is deleted");

    } catch (error) {
        res.send(error.message)
    }
};










module.exports = {getAllUser, createNewUser, getOneUser, deleteUser, updateUser}