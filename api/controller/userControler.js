const {
  obtenerUsuarioActivo,
  buscarPorEmail,
  nuevoUsuario,
  actualizarUsuario,
  eliminarUsuarioActivo,
} = require("../bussinesLogic/userBL");
const { GenericResponse } = require("../utils/genericResponse");
const { CustomMessages } = require("../utils/messages");
const { validationResult } = require("express-validator");

const obtener = async (req, res) => {
  const response = new GenericResponse();
  try {
    response.data = await obtenerUsuarioActivo();
    response.messages = "Ok";
    return res.json(response);
    return;
  } catch (error) {
    console.log(error);
    response.message = CustomMessages.error_500;
    response.success = false;
    return res.status(500).json(response);
  }
};

const guardar = async (req, res) => {
  const response = new GenericResponse();
  try {
    const error = validationResult(req);
    if (!error.isEmpty()) {
      response.success = false;
      response.message = error.mapped();
      return res.status(400).json(response);
    }
    const { email } = req.body;
    const find = await buscarPorEmail(email);

    if (find) {
      response.success = false;
      response.message = CustomMessages.error_mail;
      return res.status(400).json(response);
    }

    response.data = await nuevoUsuario(req.body);
    response.message = CustomMessages.create_ok;
    return res.status(201).json(response);
  } catch (error) {
    console.log(error);
    response.success = false;
    response.message = CustomMessages.error_500;
    return res.status(500).json(response);
  }
};

module.exports = { obtener, guardar };
