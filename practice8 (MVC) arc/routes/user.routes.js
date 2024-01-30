const express = require('express');
const router = express.Router();


const { getUser, saveUser } = require('../controllers/user.controllers');


router.get('/user', getUser)

router.post("/user", saveUser)

module.exports = router;