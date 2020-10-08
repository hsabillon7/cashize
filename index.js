// Importar los módulos requeridos para el funcionamiento del servidor
const express = require("express");
const exphbs = require("express-handlebars");

// Habilitar el archivo de variables de entorno
require("dotenv").config({ path: ".env" });

// Crear un servidor utilizando express
const app = express();

app.use("/", (req, res, next) => {
  res.send("¡Bienvenido a Cashize!");
});

app.listen(process.env.PORT);
