const reserva = require('../models/reservaModel');
const cancha = require('../models/canchaModel');
const usuario = require('../models/userModel');

async function createReserva(req, res, next) {
    try {
        const { fecha, horaInicio, horaFin, canchaId, usuarioId } = req.body;
    
        // Verificar si la cancha existe
        
        const canchaExistente = await cancha.findById(canchaId);

        console.log('canchaId:', canchaId);
        console.log('usuarioId:', usuarioId);
        if (!canchaExistente) {
        return res.status(404).json({ message: 'Cancha no encontrada' });
        }
        
        // Verificar si el usuario existe
        const usuarioExistente = await usuario.findById(usuarioId);
        if (!usuarioExistente) {
        return res.status(404).json({ message: 'Usuario no encontrado' });
        }
    
        // Crear la reserva
        const nuevaReserva = await reserva.create({
            canchaId,
            usuarioId,
            fecha,
            horaInicio,
            horaFin,    
        });

        console.log('Reserva creada:', nuevaReserva);
        req.canchaId = canchaId;
        
        next(); // Pasa al siguiente middleware

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

    const fechaInicio = new Date(`${fecha}T00:00:00.000Z`);
    const fechaFin = new Date(`${fecha}T23:59:59.999Z`);

    // Buscar reservas del mismo día
    const reservas = await reserva.find({
      fecha: { $gte: fechaInicio, $lte: fechaFin },
      horaInicio: { $gte: horaInicio },
      horaFin: { $lte: horaFin }
    });

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
        // Cancelar la reserva
        await reserva.deleteOne({ _id: reservaId });
        next(); // Pasa al siguiente middleware
        
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