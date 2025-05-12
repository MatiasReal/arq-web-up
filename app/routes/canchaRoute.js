const express = require('express');
const router = express.Router();
const cancha = require('../controllers/canchaController');

router.post('/', cancha.createCancha);

module.exports = router;