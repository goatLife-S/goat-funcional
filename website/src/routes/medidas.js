var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");

router.get("/dia", function (req, res) {
    medidaController.buscarMedidasDoDia(req, res);
});

module.exports = router;
