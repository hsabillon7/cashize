// Importar los módulos requeridos
const mongoose = require("mongoose");
const Usuario = mongoose.model("Usuarios");

// Cargar el formulario de la creación de una cuenta de usuario
exports.formularioCrearCuenta = (req, res, next) => {
  res.render("registrarse", { layout: "auth" });
};

// Procesar el formulario de creación de cuenta
exports.crearCuenta = (req, res, next) => {
  // TODO: Obtener la información desde el req.body (body-parser)
};
