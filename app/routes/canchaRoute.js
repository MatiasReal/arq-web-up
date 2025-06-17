const express = require('express');
const router = express.Router();
const cancha = require('../controllers/canchaController');

router.post('/', cancha.createCancha);
router.get('/', cancha.getCancha);
router.put('/:canchaId', cancha.updateDisponibilidad, cancha.getCancha);
router.delete('/:canchaId', cancha.deleteCancha);

module.exports = router;