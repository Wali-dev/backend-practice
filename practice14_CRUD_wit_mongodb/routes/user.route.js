const express = require('express');
const { getAllUser, createNewUser, getOneUser, deleteUser, updateUser } = require('../controllers/user.controll');
const router = express.Router();
// get all user
// create new user
// update particular user
// delete particular user


router.get('/user', getAllUser)
router.post('/user', createNewUser)
router.patch('/user/:id', updateUser)
router.delete('/user/:id', deleteUser)
router.get('/user/:id', getOneUser)


module.exports = router;
