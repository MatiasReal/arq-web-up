# API de Alquiler de Canchas de Fútbol 
El proyecto servirá para gestionar el alquiler de canchas de fútbol (5, 7 u 11 jugadores), permitiendo a usuarios reservar turnos y ver disponibilidad.

## Servicios Expuestos
-CRUD de Usuarios
  |  Crear perfiles de usuarios para reservar.
  |  Inputs:
      Nombre, email, rol(por defecto es usuario, pero uno será administrador para que pueda administrar las canchas).
  |  Outputs:
      ID de usuario, fecha de registro.
  
-CRUD de Canchas
  |  Registrar, editar o eliminar canchas (ej: "Cancha 5", "Cancha 11").
  |  Inputs:
      Nombre, tipo (5/7/11 jugadores), precio por hora.
  |  Outputs:
      ID de cancha, horarios disponibles.
  
-Asignación de Usuarios a Canchas (Reservas)
  |  Reservar, modificar o cancelar turnos.
  |  Inputs:
      ID de usuario, ID de cancha, fecha, hora de inicio y fin.
  |  Outputs:
      ID de reserva, estado ("confirmada", "cancelada").

## Clientes Potenciales
-App web para usuarios.
-Portal web de administración para dueños de canchas.

