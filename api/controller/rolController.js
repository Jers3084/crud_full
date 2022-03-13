const { listarRolesActivo, nuevoRol } = require("../bussinesLogic/rolesBL");
const { validationResult } = require("express-validator");
const { GenericResponse } = require("../utils/genericResponse");
const { CustomMessages } = require("../utils/messages");

const obtener = async (req, res) => {
  const response = new GenericResponse();
  try {
    response.data = await listarRolesActivo();
    response.messages = "Ok";
    return res.json(response);
  } catch (e) {
    console.log(e);
    response.success = false;
    response.messages = CustomMessages.error_500;
    response.data = [];
    return res.status(500).json(response);
  }
};

const guardar = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      response.messages = errors.mapped();
      return res.status(400).json(response);
    }

    const { nombre } = req.body;

    response.data = await nuevoRol(nombre);
    return res.status(201).json(response);
  } catch (e) {
    console.log(e);
    response.success = false;
    response.messages = CustomMessages.error_500;
    response.data = [];
    return res.status(500).json(response);
  }
};

module.exports = { obtener, guardar };
