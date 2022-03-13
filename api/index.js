/**
 * Importaciones
 */
const express = require("express");
require("dotenv").config();
const cors = require("cors");
const bodyParser = require("body-parser");
const { dbConnection } = require("./config/database/mongodb");
const rolRoutes = require("./Routes/rolRoutes");
const userRoutes = require("./Routes/userRoutes");
const productRouter = require("./Routes/productRoutes")

const app = express();
dbConnection();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

/**
 * Rutas
 */
app.use("/api/roles", rolRoutes);
app.use("/api/users", userRoutes);
app.use("/api/products", productRouter)

app.listen(process.env.PORT, () => {
  console.group("corriendo servidor...Puerto:" + process.env.PORT);
});
