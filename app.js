// Importamos express
const express = require('express');
const app = express();
// Trabajar con variables de entorno 
require('dotenv').config()

const db = require('./config/db')

app.listen(process.env.PORT,()=>{
    console.log(`Servidor conectado correctamente en el puerto ${process.env.PORT}` )
})