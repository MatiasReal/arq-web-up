const user = require('../models/userModel');

async function createUser(req, res) {
    try {
        const { nombre, email, password } = req.body;

        // Verificar si el usuario ya existe
        const usuarioExistente = await user.findOne({ email });
        if (usuarioExistente) {
            return res.status(400).json({ message: 'El usuario ya existe' });
        }
        // Crear el nuevo usuario
        const nuevoUsuario = await user.create({
            nombre,
            email,
            password
        });
        res.status(201).json(nuevoUsuario);
    }
    catch (error) {
        res.status(500).json({ message: 'Error al crear el usuario', error });
    }
}

module.exports = {
    createUser,
};