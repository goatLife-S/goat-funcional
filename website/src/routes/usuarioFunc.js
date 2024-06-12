var express = require("express");
var router = express.Router();

var usuarioFuncController = require("../controllers/usuarioFuncController");

router.post("/autenticarFunc", function (req, res) {
    usuarioFuncController.autenticarFunc(req, res);
});

module.exports = router;