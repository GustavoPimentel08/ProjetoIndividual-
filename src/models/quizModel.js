
var database = require("../database/config")

function alocar(idUsuario, qtd_acertoIngles, qtd_acertoEspanhol, qtd_acertoFrances) {
    var instrucao = `
        INSERT INTO partida (idPartida, fkQuiz, fkUsuario,qtd_acertoIngles, qtd_acertoEspanhol, qtd_acertoFrances) VALUES 
        (default, 1,${idUsuario},'${qtd_acertoIngles}','${qtd_acertoEspanhol}','${qtd_acertoFrances}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    alocar
};