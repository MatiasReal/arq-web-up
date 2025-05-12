const express = require('express');
const router = express.Router();
const reserva = require('../controllers/reservaController');

router.post('/', reserva.createReserva);

module.exports = router;