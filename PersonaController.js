// Controlador de Persona
const { Persona } = require('./Persona');

class PersonaController {
  async registrarPersona(req, res) {
    try {
      const { nombre, apellido, edad } = req.body;
      const persona = new Persona(nombre, apellido, edad);
      console.log("Informacion de la persona: ",persona);

      // Aquí puedes guardar la persona en una base de datos
      res.status(201).send(`Persona registrada con éxito: ${persona.nombre} ${persona.apellido}`);
    } catch (error) {
      res.status(500).send(`Error al registrar persona: ${error.message}`);
    }
  }
}

module.exports = { PersonaController };