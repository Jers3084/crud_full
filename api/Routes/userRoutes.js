const { Router } = require("express");
const { obtener, guardar } = require("../controller/userControler");
const router = Router();

router.get("/", obtener);
router.post("/", guardar);



module.exports = router;