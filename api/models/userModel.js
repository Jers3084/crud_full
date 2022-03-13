const { model, Schema } = require("mongoose");

const userShema = new Schema({
  nombre: { type: String, required: true },
  apellido: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  telefono: { type: String },
  rol: [{ref: 'role', type: Schema.Types.ObjectId, required: true }],
},
{
versionKey: false,
timestamps: true,
}
);
//nombre de la coleccion en singular y el esquema
module.exports = model("user", userShema);
