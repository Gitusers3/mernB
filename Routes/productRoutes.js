const express = require('express');
const router=express.Router();
const Insert = require('../Controllers/productController')
router.post('/insert',Insert)
module.exports = router