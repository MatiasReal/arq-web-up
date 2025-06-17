const express = require('express');
const cancha = require('../models/canchaModel');


async function createCancha(req, res) {
  try {
    const { nombre, tipoCancha, precioPorHora } = req.body;

    let img = '';
    if (tipoCancha === '5') {
      img = 'public/cancha5.jpg';
    } else if (tipoCancha === '7') {
      img = 'public/cancha7.jpeg';
    } else if (tipoCancha === '11') {
      img = 'public/cancha11.jpg';
    }

    const newCancha = await cancha.create({ 
        nombre, 
        tipoCancha, 
        precioPorHora,
        disponibilidad: true,
        img
    });
    console.log(newCancha);
    res.status(201).json(newCancha);
  } catch (error) {
    res.status(500).json({ message: 'Error al crear la cancha', error });
  }
}

async function getCancha(req, res) {
  try {
    const canchas = await cancha.find();
    res.status(200).json(canchas);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener las canchas', error });
  }
}

async function updateDisponibilidad(req, res) {
  try {
    const id = req.canchaId;

    if (!id) {
      return res.status(400).json({ message: 'Falta el ID de la cancha para actualizar disponibilidad' });
    }

    const canchaActual = await cancha.findById(id);

    if (!canchaActual) {
      return res.status(404).json({ message: 'Cancha no encontrada en update' });
    }

    if (canchaActual.disponibilidad === false) {
        canchaActual.disponibilidad = true;
        await canchaActual.save();
        res.status(200).json({
          message: `Disponibilidad actualizada a 'disponible' para la cancha: ${id}`,
          cancha: canchaActual
        });
    }else{
      try {
        canchaActual.disponibilidad = false;
        await canchaActual.save();
        res.status(200).json({
          message: `Disponibilidad actualizada a 'no disponible' para la cancha: ${id}`,
          cancha: canchaActual
        });
      } catch (error) {
        res.status(500).json({ message: 'Error al actualizar la disponibilidad', error });
      }
    }

    console.log(`Disponibilidad actualizada a 'no disponible' para la cancha:`, id);
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar la disponibilidad', error });
  }
}

async function deleteCancha(req, res) {
  try {
    const id = req.params.id;

    if (!id) {
      return res.status(400).json({ message: 'Falta el ID de la cancha para eliminar' });
    }

    const canchaEliminada = await cancha.findByIdAndDelete(id);

    if (!canchaEliminada) {
      return res.status(404).json({ message: 'Cancha no encontrada para eliminar' });
    }

    res.status(200).json({ message: 'Cancha eliminada correctamente', cancha: canchaEliminada });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar la cancha', error });
  }
}

module.exports = {
  createCancha,
  getCancha,
  updateDisponibilidad,
  deleteCancha
};
