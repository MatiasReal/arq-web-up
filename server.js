const express = require("express");
const cors = require("cors");
const db = require('./app/config/database');    // Conexión DB
const http = require('http');
const app = require('./app/config/app');
const PORT = process.env.PORT || 5000;


http
  .createServer(app)
  .listen(PORT, () => console.log(`Server listening on port ${PORT}`));

app.use(cors());
app.use(express.json());

// Importar rutas
const canchaRoute = require('./app/routes/canchaRoute');
const reservaRoute  = require('./app/routes/reservaRoute');
const userRoute  = require('./app/routes/userRoute');

// Montar routers bajo /api
app.use('/api/canchas', canchaRoute);
app.use('/api/reservas',   reservaRoute);
app.use('/api/users',   userRoute);

module.exports = app;