const { Router } = require("express");
const { obtener, guardar } = require("../controller/rolController");
const { body } = require("express-validator");

const validator  = require("../validators/rolValidator");
const router = Router();

router.get("/", obtener);
router.post("/", validator.createRolValidator, guardar);



module.exports = router;