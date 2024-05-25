const express = require('express');
const router = express.Router();
const personajeController = require('../controllers/personajeController');
router.post('/guardar-personaje', personajeController.guardarPersonaje);
router.get('/personajes', personajeController.getPersonajes);
router.get('/personaje/:id', personajeController.getPersonaje)
router.put('/actualizar-personaje/:id', personajeController.updatePersonaje);
router.delete('/borrar-personaje/:id', personajeController.deletePersonaje);
router.post('/guardar-personaje-favorito', personajeController.guardarPersonajeFavorito)
router.get('/personajesFavoritos', personajeController.getPersonajesFavoritos);
router.delete('/borrar-favorito/:id', personajeController.deletePersonajeFavorito)
module.exports = router;