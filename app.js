// Importamos express
const express = require('express');
const app = express();
// Trabajar con variables de entorno 
require('dotenv').config()
const db = require('./config/db')
const cors = require('cors');
const bodyParser = require('body-parser');
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const personajeRoutes = require('./routes/personajeRoutes');
app.use('/api', personajeRoutes)
app.listen(process.env.PORT,()=>{
    console.log(`Servidor conectado correctamente en el puerto ${process.env.PORT }` )
})