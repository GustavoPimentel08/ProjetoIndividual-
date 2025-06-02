var formularioModel = require("../models/formularioModel");

function inserir(req, res) {
    var pergunta1 = req.body.pergunta1Server;
    var pergunta2 = req.body.pergunta2Server;
    var pergunta3 = req.body.pergunta3Server;

    if (pergunta1 == undefined || pergunta2 == undefined || pergunta3 == undefined) {
        res.status(400).send("Sua pergunta está undefined!");
        console.log("Pergunta1; ",pergunta1);
        console.log("Pergunta1; ",pergunta2);
        console.log("Pergunta1; ",pergunta3);
    }

    formularioModel.inserir(pergunta1, pergunta2, pergunta3).then(function(resposta){
        res.status(200).send("Formularios criados com sucesso");
        console.log("Pergunta1; ",pergunta1);
        console.log("Pergunta1; ",pergunta2);
        console.log("Pergunta1; ",pergunta3);
        
    }).catch(function(erro){
        console.log("Deu merda aqui no Controller! Socorro")
        res.status(500).json(erro.sqlMessage);
    })
}

module.exports = {
    inserir
}