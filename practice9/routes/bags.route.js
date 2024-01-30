const express = require('express');
const { getBag, saveBag } = require('../controllers/bags.controller');
const router = express.Router();




router.get('/bags',getBag);
router.post('/bags',saveBag);


module.exports = router;