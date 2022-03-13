const {listarRoles, guardarRolRepository} = require('../repositorys/rolesRepository');

const listarRolesActivo = async () => {
   return await listarRoles();
}

const nuevoRol = async (nombreRol) => {
const agregarRol = {
   nombre: nombreRol
}
return await guardarRolRepository(agregarRol);

}
module.exports = {listarRolesActivo, nuevoRol};