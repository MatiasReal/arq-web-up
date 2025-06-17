const express    = require('express');
const cors       = require('cors');
const bodyParser = require('body-parser');
const path       = require('path');

const canchaRoute = require('../routes/canchaRoute');
const reservaRoute  = require('../routes/reservaRoute');
const userRoute  = require('../routes/userRoute');


const app = express();

// Middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Montar routers bajo /api
app.use('/api/canchas', canchaRoute);
app.use('/api/reservas',   reservaRoute);
app.use('/api/users',   userRoute);

// Manejador global de errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Ocurrió un error en el servidor' });
});

module.exports = app;