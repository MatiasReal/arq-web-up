# API de Alquiler de Canchas de Fútbol 
El proyecto servirá para gestionar el alquiler de canchas de fútbol (5, 7 u 11 jugadores), permitiendo a usuarios reservar turnos y ver disponibilidad.

## Servicios Expuestos
-CRUD de Usuarios
  |  Crear perfiles de usuarios para reservar.
  |  Autenticar usuarios mediante login.
  |  Inputs:
      Nombre, email, rol(por defecto es usuario, pero uno será administrador para que pueda administrar las canchas).
  |  Outputs:
      ID de usuario, fecha de registro.
  
-CRUD de Canchas
  |  Registrar, editar disponibilidad o eliminar canchas (ej: "Cancha 5", "Cancha 11").
  |  Inputs:
      Nombre, tipo (5/7/11 jugadores), precio por hora.
  |  Outputs:
      ID de cancha, horarios disponibles.
  
-Asignación de Usuarios a Canchas (Reservas)
  |  Crear reservas o cancelar reservas.
  |  Inputs:
      ID de usuario, ID de cancha, fecha, hora de inicio y fin.
  |  Outputs:
      ID de reserva, estado ("confirmada", "cancelada").
  
-Reporte de las reservas para el administrador y la posibilidad de filtrarlas por fecha.

  ## Endpoints
  -/api/canchas
  -/api/reservas
  -/api/users
  -/api/users/login

## Clientes Potenciales
-App web para usuarios.
-Portal web de administración para dueños de canchas.

