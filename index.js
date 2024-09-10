// Archivo principal de la aplicación
const express = require('express');
const app = express();
const { PersonaController } = require('./PersonaController');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

const personaController = new PersonaController();
app.post('/persona', personaController.registrarPersona.bind(PersonaController));
app.listen(3000, () => {
  console.log('Servidor iniciado en http://localhost:3000');
});