// Importamos express
const express = require('express');
const app = express();
const path = require('path')

// Trabajar con variables de entorno 
require('dotenv').config()
const db = require('./config/db')
const cors = require('cors');
const bodyParser = require('body-parser');
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const personajeRoutes = require('./routes/personajeRoutes');
const mensajesRoutes = require('./routes/mensajeRoutes')
app.use('/api', personajeRoutes);
app.use('/api',mensajesRoutes)


//Trabajando con los sockets
const http = require('http');
const server = http.createServer(app);
const setupSocket = require('./config/socket');

const io = setupSocket(server);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
  });
app.use(express.static(path.join(__dirname, 'public')));
io.on('connection', (socket) => {
    socket.connected ? console.log("Usuario conectado") : console.log("Usuario desconectado")
  });

  

server.listen(process.env.PORT,()=>{
    console.log(`Servidor conectado correctamente en el puerto ${process.env.PORT } en sockets` )
})