const mongoose = require('mongoose');

const canchaSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  tipoCancha: {
    type: String,
    enum: ['5', '7', '11'],
    required: true,
  },
  precioPorHora: {
    type: Number,
    required: true,
  },
  disponibilidad: {
    type: Boolean,
    default: true,
  },
  img:{
    type: String,
    default: ' '
  }
});

module.exports = mongoose.model('Cancha', canchaSchema);