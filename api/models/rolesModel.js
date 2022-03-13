const { model, Schema } = require("mongoose");

const rolesShema = new Schema({
  nombre: { type: String, required: true },
 });
 
//nombre de la coleccion en singular y el esquema
module.exports = model("role", rolesShema);