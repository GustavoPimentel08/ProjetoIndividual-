    var quizModel = require("../models/quizModel");

    function alocar(req, res) {
        var qtd_acertoIngles = req.body.qtd_acertoInglesServer;
        var qtd_acertoEspanhol = req.body.qtd_acertoEspanholServer;
        var qtd_acertoFrances = req.body.qtd_acertoFrancesServer;
        var idUsuario = req.body.idUsuarioServer;

        if (qtd_acertoIngles == undefined || qtd_acertoEspanhol == undefined || qtd_acertoFrances == undefined) {
            res.status(400).send("Sua pergunta está undefined!");
            console.log("Perguntas de Inglês; ",qtd_acertoIngles);
            console.log("Perguntas de Espanhol; ",qtd_acertoEspanhol);
            console.log("Perguntas de Frances; ",qtd_acertoFrances);
        }

        // qtd_acertoFrances, qtd_acertoEspanhol, qtd_acertoIngles

        quizModel.alocar(idUsuario, qtd_acertoIngles, qtd_acertoEspanhol, qtd_acertoFrances).then(function(resposta){
            res.status(200).send("quiz criados com sucesso");
            
        }).catch(function(erro){
            console.log("Deu merda aqui no Controller parte do quiz idiomas! Socorro")
            res.status(500).json(erro.sqlMessage);
        })


    }

    module.exports = {
        alocar
    }