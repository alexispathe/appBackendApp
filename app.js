// Importamos express
const express = require('express');
const app = express();
//Trabajando con los sockets
const http = require('http');
const server = http.createServer(app);
const setupSocket = require('./config/socket');

const io = setupSocket(server);

  
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
server.listen(process.env.PORT,()=>{
    console.log(`Servidor conectado correctamente en el puerto ${process.env.PORT }` )
})