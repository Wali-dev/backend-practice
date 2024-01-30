const USER = require('../models/user.model.js');
const {v4: uuidv4} = require('uuid');

const getAllUser = async(req, res)=>{
    const  users = await USER.find();

    res.json(users);
}
const getOneUser = async (req, res)=>{
    const id = req.params.id;
    const thatUser = await USER.findOne({id});
    res.json(thatUser);
}
const createUser = async (req, res)=>{

    try {

        const newUser = new USER({
            id: uuidv4(),
            name: req.body.name,
            email: req.body.email,
            age: Number(req.body.age)
            
        })

        await newUser.save();
        res.json(newUser);
        
    } catch (error) {
        
    }
    
}
const updateUser = async(req, res)=>{
    
    try {
        const id = req.body.id;
        const thatUser = await USER.findOne({id})
            thatUser.name= req.params.name,
            thatUser.email= req.params.email,
            thatUser.age= Number(req.params.email)

         thatUser.save();

        res.json(thatUser)
        
    } catch (error) {
        
    }
}
const deleteUser =async(req, res)=>{
    const id = req.params.id;

    const thatUser = await USER.findOne({id});
   const name = thatUser.name;

    await USER.deleteOne({id})

   res.status(200).send(`The user ${name} is deleted`)

}




module.exports = {getAllUser, getOneUser, createUser, deleteUser, updateUser}