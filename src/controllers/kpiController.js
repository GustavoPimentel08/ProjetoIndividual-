var kpiModel = require("../models/kpiModel");

function listarBarra(req, res) {
    var idUsuario = req.params.idUsuario;

    console.log("2 - Cheguei no controller da barra, vamoo!");
    kpiModel.listarBarra(idUsuario).then(
        function (resultado) {
            console.log("2 - To na função do controller da barra");
            res.status(200).json(resultado);
        }
    ).catch(
        function (erro) {
            console.log("2 - Deu merda aqui no controller da barra: /n");
            res.status(500).json({ erro: erro.sqlMessage || erro.message || erro });
        }
    )
}

function listarBarra1(req, res) {
    var idUsuario = req.params.idUsuario;

    console.log("1 - Cheguei no controller da barra1, vamoo!");
    kpiModel.listarBarra1(idUsuario).then(
        function (resultado) {
            console.log("1 - To na função do controller da barra1");
            res.status(200).json(resultado);
        }
    ).catch(
        function (erro) {
            console.log("1 - Deu merda aqui no controller da barra1: /n");
            res.status(500).json({ erro: erro.sqlMessage || erro.message || erro });
        }
    )
}

function listar(req, res) {
    var idUsuario = req.params.idUsuario;

    console.log("1 - Cheguei no controller do listar, vamoo!");
    kpiModel.listar(idUsuario).then(
        function (resultado) {
            console.log("1 - To na função do controller do listar");
            res.status(200).json(resultado);
        }
    ).catch(
        function (erro) {
            console.log("1 - Deu merda aqui no controller do listar: /n");
            res.status(500).json({ erro: erro.sqlMessage || erro.message || erro });
        }
    )
}

module.exports = {
    listarBarra,
    listarBarra1,
    listar
}