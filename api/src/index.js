//Llamada a los paquetes
const express = require("express");
const mongoose = require("mongoose");
const productos = require("./routes/productos");

const swaggerUi = require("swagger-ui-express");
const swaggerJSDoc = require("swagger-jsdoc");
require("dotenv").config()
const path = require("path");


const aplicacion = express();

aplicacion.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS'); 
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }
  next();
});
const puerto = 4000;

// Configuración de Swagger
const swaggerConf = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Documentacion API Tienda",
      version: "1.0.0",
    },
    servers: [
      {
        url: "http://localhost:3000",
      },
    ],
  },
  // Especifica las rutas de tus archivos Swagger 
  apis: [path.join(__dirname, "./routes/*.js")],
};

// Middleware para procesar solicitudes JSON
aplicacion.use(express.json());

// Rutas de la API
aplicacion.use("/api", productos);

// Rutas para la documentación de Swagger
aplicacion.use("/api-doc", swaggerUi.serve, swaggerUi.setup(swaggerJSDoc(swaggerConf)));


// Conexión a la base de datos con Mongoose
mongoose.connect(process.env.mongodb_conexion)
    .then(() => { console.log("Conexión realizada")})
    .catch((error) => { console.log(error)})

aplicacion.listen(puerto, () => { console.log("Aplicación ejecutándose") } )
