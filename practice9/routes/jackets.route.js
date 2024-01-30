const express = require('express');
const { getjacket, savejacket } = require('../controllers/jackets.controller');
const router = express.Router();



router.get("/jacket", getjacket)

router.post("/jacket", savejacket)


module.exports = router;