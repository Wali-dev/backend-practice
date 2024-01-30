
const express = require('express');
const { allUser, newUser, updateUser, deleteUser } = require('../controllers/user.controllers');
const router = express.Router();

router.get("/user", allUser)
router.post("/user", newUser)
router.put('/user/:id', updateUser)
router.delete("/user/:id", deleteUser)



module.exports = router;