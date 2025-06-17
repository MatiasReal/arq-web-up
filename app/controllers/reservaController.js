const reserva = require('../models/reservaModel');
const cancha = require('../models/canchaModel');
const usuario = require('../models/userModel');

async function createReserva(req, res, next) {
    try {
        const { fecha, horaInicio, horaFin, canchaId, usuarioId } = req.body;
        
        const canchaExistente = await cancha.findById(canchaId);

        console.log('canchaId:', canchaId);
        console.log('usuarioId:', usuarioId);
        if (!canchaExistente) {
        return res.status(404).json({ message: 'Cancha no encontrada' });
        }
        
        const usuarioExistente = await usuario.findById(usuarioId);
        if (!usuarioExistente) {
        return res.status(404).json({ message: 'Usuario no encontrado' });
        }
    
        const nuevaReserva = await reserva.create({
            canchaId,
            usuarioId,
            fecha,
            horaInicio,
            horaFin,    
        });

        res.status(201).json(nuevaReserva);
        console.log('Reserva creada:', nuevaReserva);
        req.canchaId = canchaId;
        
        next(); 

    } catch (error) {
        console.error('Error en createReserva:', error);
        return res.status(500).json({ 
            message: 'Error al crear la reserva', 
            error: error.message || error 
        });
    }
}


async function getReservas(req, res) {
  try {
    const { fecha, horaInicio, horaFin } = req.query;
    let query = {};

    if (fecha) {
      const fechaInicio = new Date(`${fecha}T00:00:00.000Z`);
      const fechaFin = new Date(`${fecha}T23:59:59.999Z`);
      query.fecha = { $gte: fechaInicio, $lte: fechaFin };
    }
    if (horaInicio) {
      query.horaInicio = { $gte: horaInicio };
    }
    if (horaFin) {
      query.horaFin = { $lte: horaFin };
    }

    const reservas = await reserva.find(query)
      .populate('usuarioId')
      .populate('canchaId');

    return res.status(200).json(reservas);
  } catch (error) {
    console.error('Error en getReservas:', error);
    return res.status(500).json({
      message: 'Error al obtener las reservas',
      error: error.message || error
    });
  }
}


async function cancelarReserva(req, res, next) {
    try {
        const { reservaId } = req.params;

        const reservaExistente = await reserva.findById(reservaId);
        if (!reservaExistente) {
            return res.status(404).json({ message: 'Reserva no encontrada' });
        }

        req.canchaId = reservaExistente.canchaId;
        await reserva.deleteOne({ _id: reservaId });

        next();
        
        return res.status(200).json({ message: 'Reserva cancelada con éxito' });
    } catch (error) {
        console.error('Error en cancelarReserva:', error);
        return res.status(500).json({ 
            message: 'Error al cancelar la reserva', 
            error: error.message || error 
        });
    }
}
    module.exports = {
        createReserva,
        cancelarReserva, 
        getReservas
    };