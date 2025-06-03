var express = require("express");
var router = express.Router();

var kpiController = require("../controllers/kpiController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.get("/listarBarra/:idUsuario", function (req,res) {
    console.log("2 - Cheguei aqui no route da barra");
    // graficos/barra
    kpiController.listarBarra(req, res);
} );

router.get("/listarBarra1/:idUsuario", function (req,res) {
    console.log("2 - Cheguei aqui no route da barra1");
    // graficos/barra
    kpiController.listarBarra1(req, res);
} );

router.get("/listar/:idUsuario", function (req,res) {
    console.log("2 - Cheguei aqui no route da listar");
    // graficos/barra
    kpiController.listar(req, res);
} );



module.exports = router;