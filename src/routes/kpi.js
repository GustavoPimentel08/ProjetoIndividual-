var express = require("express");
var router = express.Router();

var kpiController = require("../controllers/kpiController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.get("/listarBarra", function (req,res) {
    console.log("2 - Cheguei aqui no route da barra");
    // graficos/barra
    kpiController.listarBarra(req, res);
} );

router.get("/listarBarra1", function (req,res) {
    console.log("2 - Cheguei aqui no route da barra1");
    // graficos/barra
    kpiController.listarBarra1(req, res);
} );




router.get("/listarPizza", function (req,res) {
    console.log("2 - Cheguei aqui no route da Pizza");
    // graficos/barra
    kpiController.listarPizza(req, res);
} );




router.get("/listarEstudo", function (req,res) {
    console.log("2 - Cheguei aqui no route da listarEstudo");
    // graficos/barra
    kpiController.listarEstudo(req, res);
} );

router.get("/listarIdioma", function (req,res) {
    console.log("2 - Cheguei aqui no route da listarIdioma");
    // graficos/barra
    kpiController.listarIdioma(req, res);
} );



module.exports = router;