const express = require('express')
const router = express.Router();
const reciptController = require('../controllers/reciptController');
router.route('/').get(reciptController.getAllRecipts).post(reciptController.createRecipt)

module.exports = router