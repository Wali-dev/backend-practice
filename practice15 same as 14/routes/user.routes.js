const express = require('express');
const { getAllUser, createUser, getOneUser, deleteUser, updateUser } = require('../controllers/user.controller');
const router = express.Router();


router.get("/user", getAllUser)
router.get("/user/:id", getOneUser)
router.post("/user", createUser)
router.put("/user/:id", updateUser)
router.delete("/user/:id", deleteUser)










module.exports = router;