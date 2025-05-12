const mongoose = require('mongoose');
const reservaSchema = new mongoose.Schema({
  fecha: {
    type: Date,
    required: true,
  },
  horaInicio: {
    type: String,
    required: true,
  },
  horaFin: {
    type: String,
    required: true,
  },
  canchaId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Cancha',
    required: true,
  },
  usuarioId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Usuario',
    required: true,
  },
});