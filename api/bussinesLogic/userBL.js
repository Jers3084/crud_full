const {
  obtenerUsuarios,
  buscarUsuarioPorCorreo,
  crearUsuario,
  actualizaUsuario,
  eliminarUsuario,
} = require("../repositorys/userRepository");
const {encryptPassword} = require('../utils/password');

const obtenerUsuarioActivo = async () => {
  return await obtenerUsuarios();
};

const buscarPorEmail = async (email) => {
  return await buscarUsuarioPorCorreo(email);
};

const nuevoUsuario = async (user) => {
   user.password = encryptPassword(user.password);
  return await crearUsuario(user);
};

const actualizarUsuario = async (user) => {
  const { password, telefono, rol, id } = user;
  return await actualizaUsuario(id, password, telefono, rol);
};

const eliminarUsuarioActivo = async (_id) => {
  return await eliminarUsuario(_id);
};

module.exports = {
  obtenerUsuarioActivo,
  buscarPorEmail,
  nuevoUsuario,
  actualizarUsuario,
  eliminarUsuarioActivo,
};
