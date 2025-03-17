# API de Alquiler de Canchas de Fútbol 
El proyecto servirá para gestionar el alquiler de canchas de fútbol (5, 7 u 11 jugadores), permitiendo a usuarios reservar turnos y ver disponibilidad.

## Servicios Expuestos
-CRUD de Usuarios
  |  Crear perfiles de usuarios para reservar.
  |  Inputs:
  |    Nombre, email, teléfono.
  |  Outputs:
  |    ID de usuario, fecha de registro.
-CRUD de Canchas
  |  Registrar, editar o eliminar canchas (ej: "Cancha 5", "Cancha 11").
  |  Inputs:
  |    Nombre, tipo (5/7/11 jugadores), precio por hora.
  |  Outputs:
  |    ID de cancha, horarios disponibles.
-Asignación de Usuarios a Canchas (Reservas)
  |  Reservar, modificar o cancelar turnos.
  |  Inputs:
  |    ID de usuario, ID de cancha, fecha, hora de inicio y fin.
  |  Outputs:
  |    ID de reserva, estado ("confirmada", "cancelada").

##Clientes Potenciales
-Aplicación móvil para usuarios.
-Panel web de administración para dueños de canchas.
-Pantalla pública en el complejo deportivo con horarios en tiempo real.

