const express = require('express');
const cancha = require('../models/canchaModel');

async function createCancha(req, res) {
  try {
    const { nombre, tipoCancha, precioPorHora } = req.body;
    const newCancha = await cancha.create({ 
        nombre, 
        tipoCancha, 
        precioPorHora,
        disponibilidad: true 
    });
    console.log(newCancha);
    res.status(201).json(newCancha);
  } catch (error) {
    res.status(500).json({ message: 'Error al crear la cancha', error });
  }
}

module.exports = {
  createCancha,
};