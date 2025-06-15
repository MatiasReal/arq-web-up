const express = require('express');
const router = express.Router();
const reserva = require('../controllers/reservaController');
const cancha = require('../controllers/canchaController');

router.post('/', reserva.createReserva, cancha.updateDisponibilidad);
router.delete('/:reservaId', reserva.cancelarReserva, cancha.updateDisponibilidad);
router.get('/', reserva.getReservas);

module.exports = router;