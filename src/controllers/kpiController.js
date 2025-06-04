var kpiModel = require("../models/kpiModel");

function listarBarra(req, res) {

    console.log("2 - Cheguei no controller da barra, vamoo!");
    kpiModel.listarBarra().then(
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

    console.log("1 - Cheguei no controller da barra1, vamoo!");
    kpiModel.listarBarra1().then(
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

function listarPizza(req, res) {

    console.log("1 - Cheguei no controller da Pizza, vamoo!");
    kpiModel.listarPizza().then(
        function (resultado) {
            console.log("1 - To na função do controller da Pizza");
            res.status(200).json(resultado);
        }
    ).catch(
        function (erro) {
            console.log("1 - Deu merda aqui no controller da Pizza: /n");
            res.status(500).json({ erro: erro.sqlMessage || erro.message || erro });
        }
    )
}

function listarEstudo(req, res) {

    console.log("1 - Cheguei no controller do listarEstudo, vamoo!");
    kpiModel.listarEstudo().then(
        function (resultado) {
            console.log("1 - To na função do controller do listarEstudo");
            res.status(200).json(resultado);
        }
    ).catch(
        function (erro) {
            console.log("1 - Deu merda aqui no controller do listarEstudo: /n");
            res.status(500).json({ erro: erro.sqlMessage || erro.message || erro });
        }
    )
}

function listarIdioma(req, res) {

    console.log("1 - Cheguei no controller do listarIdioma, vamoo!");
    kpiModel.listarIdioma().then(
        function (resultado) {
            console.log("1 - To na função do controller do listarIdioma");
            res.status(200).json(resultado);
        }
    ).catch(
        function (erro) {
            console.log("1 - Deu merda aqui no controller do listarIdioma: /n");
            res.status(500).json({ erro: erro.sqlMessage || erro.message || erro });
        }
    )
}

module.exports = {
    listarBarra,
    listarBarra1,
    listarPizza,
    listarIdioma,
    listarEstudo
};