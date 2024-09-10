Modelo-Vista-Controlador

Esta es una aplicación básica de Node.js que utiliza la arquitectura Modelo-Vista-Controlador (MVC).

Archivos

index.js: El archivo principal de la aplicación, responsable de configurar el servidor Express y enrutar.
PersonaController.js: El archivo de controlador, responsable de manejar solicitudes y interactuar con el modelo.
Persona.js: El archivo de modelo, que representa a una persona con atributos como nombre, apellido y edad.
index.html: El archivo de vista, una página HTML simple que sirve como interfaz de la aplicación.
Uso

Ejecute node index.js para iniciar el servidor.
Abra un navegador web y navegue a http://localhost:3000 para acceder a la aplicación.
Funcionalidad

La aplicación permite a los usuarios registrar una persona enviando una solicitud POST a la URL raíz (/) con los siguientes atributos:

nombre: El nombre de la persona.
apellido: El apellido de la persona.
edad: La edad de la persona.
La aplicación responderá con un mensaje de éxito si el registro es exitoso, o un mensaje de error si hay un problema.

Nota

Este es un ejemplo básico y no incluye persistencia de datos ni manejo de errores. Está destinado solo para fines educativos.
Usar npm install para instalar los paquetes necesarios
