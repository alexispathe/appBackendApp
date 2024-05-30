const socketIO = require('socket.io');

function setupSocket(server) {
  const io = socketIO(server);

  // Configura la lógica para manejar eventos de sockets
  io.on('connection', (socket) => {
    console.log('Un cliente se ha conectado.');

    // Manejar el evento de envío de mensaje
    socket.on('sendMessage', (data) => {
      // Aquí puedes guardar el mensaje en la base de datos, emitirlo a todos los clientes conectados, etc.
      io.emit('message', data); // Emitir el mensaje a todos los clientes
    });

    // Manejar el evento de desconexión de un cliente
    socket.on('disconnect', () => {
      console.log('Un cliente se ha desconectado.');
    });
  });

  return io;
}

module.exports = setupSocket;