// Importar los módulos requeridos
const express = require("express");

// Configura y mantiene todos los endpoints en el servidor
const router = express.Router();

module.exports = () => {
  // Rutas disponibles
  router.get("/", (req, res, next) => {
    res.send("¡Bienvenido a Cashize!");
  });

  return router;
};
