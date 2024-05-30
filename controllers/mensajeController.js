const db = require('../config/db');

const guardarMensajes = (req, res, io) => { // Acepta el objeto io como parámetro adicional
  const { sender, message } = req.body;
  const query = 'INSERT INTO chat_messages (sender, message) VALUES (?, ?)';
  db.query(query, [sender, message], (error, result) => {
    if (error) {
      console.error('Error al crear el mensaje:', error);
      res.status(500).json({ error: 'Error al crear el mensaje' });
    } else {
      res.status(201).json({ message: 'Mensaje creado exitosamente' });
    }
  });
};

const getMensajes = (req, res) => {
  const query = 'SELECT * FROM mensajes ORDER BY fecha DESC';
  db.query(query, (error, results) => {
    if (error) {
      console.error('Error al obtener los mensajes:', error);
      res.status(500).json({ error: 'Error al obtener los mensajes' });
    } else {
      res.status(200).json(results);
    }
  });
};

module.exports = { guardarMensajes, getMensajes };