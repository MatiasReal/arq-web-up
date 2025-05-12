const reserva = require('../models/reservaModel');
const cancha = require('../models/canchaModel');
const usuario = require('../models/userModel');

async function createReserva(req, res) {
    try {
        const { fecha, horaInicio, horaFin, canchaId, usuarioId } = req.body;
    
        // Verificar si la cancha existe
        const canchaExistente = await cancha.findById(canchaId);
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
        cancha: canchaId,
        usuario: usuarioId,
        fecha,
        horaInicio,
        horaFin
        });
    
        res.status(201).json(nuevaReserva);
    } catch (error) {
        res.status(500).json({ message: 'Error al crear la reserva', error });
    }
    }

    module.exports = {
        createReserva,
    };