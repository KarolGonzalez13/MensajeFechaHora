// server.js
const express = require("express");
require("dotenv").config();
const app = express();

// Importar rutas
const rutas = require("./Rutas/ruta");

// Usar rutas
app.use("/", rutas);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("Servidor en http://localhost:" + port);
});
