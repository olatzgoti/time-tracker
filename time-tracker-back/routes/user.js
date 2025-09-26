const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');


router.get('/get', userController.get);
router.post('/new', userController.register)

module.exports = router