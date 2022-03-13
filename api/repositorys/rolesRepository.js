const RolesModel = require('../models/rolesModel');

//Lista todos los roles de la base de datos
const listarRoles = async () => {
   return await RolesModel.find();
 };

/**
 * Guarda un nuevo rol
 * @param {object} objRol 
 * @returns un nuevo rol
 */
const guardarRolRepository = async (objRol) => {
   const nuevorol = new RolesModel(objRol);
   return await nuevorol.save();
 };

 

 module.exports={listarRoles, guardarRolRepository};