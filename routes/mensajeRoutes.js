const express = require('express');
const router = express.Router();
const mensajeController = require('../controllers/mensajeController');
const io = require('../config/socket'); // Importa el objeto io

router.post('/mensajes', (req, res) => {
  mensajeController.guardarMensajes(req, res, io); // Pasa el objeto io como parámetro adicional
});

router.get('/mensajes', mensajeController.getMensajes);

module.exports = router;