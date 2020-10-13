// Importar los módulos requeridos para el funcionamiento del servidor
const express = require("express");
require("./config/db");
const exphbs = require("express-handlebars");
const router = require("./routes/index");

// Habilitar el archivo de variables de entorno
require("dotenv").config({ path: ".env" });

// Crear un servidor utilizando express
const app = express();

// Habilitar Handlebars como nuestro template engine
app.engine("hbs", exphbs({ defaultLayout: "main", extname: ".hbs" }));

app.set("view engine", "hbs");

// Implementar nuestro router
app.use("/", router());

app.listen(process.env.PORT);
