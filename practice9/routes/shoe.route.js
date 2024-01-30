const express = require('express');
const router = express.Router();

const { getShoe, saveShoe } = require('../controllers/shoe.controller');


router.get('/shoe',getShoe);
router.post('/shoe',saveShoe);


module.exports = router;