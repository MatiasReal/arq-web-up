const user = require('../models/userModel');

async function createUser(req, res) {
    try {
        const { name, email, password } = req.body;

        const usuarioExistente = await user.findOne({ email });
        if (usuarioExistente) {
            return res.status(400).json({ message: 'El usuario ya existe' });
        }
        const nuevoUsuario = await user.create({
            name,
            email,
            password
        });
        res.status(201).json(nuevoUsuario);
    }
    catch (error) {
        res.status(500).json({ message: 'Error al crear el usuario', error });
    }
}

async function loginUser(req, res) {
    try {
        const {email, password } = req.query;
        const usuario = await user.findOne({ email });

        if (!usuario) {
            return res.json({ authenticated: false });
        }

        if (usuario.password !== password) {
            return res.json({ authenticated: false });
        }

        res.json({ authenticated: true, user: { _id: usuario._id, email: usuario.email, name: usuario.name, role: usuario.role } });
    } catch (error) {
        res.status(500).json({ message: 'Error en login', error });
    }
}


module.exports = {
    createUser,
    loginUser
};