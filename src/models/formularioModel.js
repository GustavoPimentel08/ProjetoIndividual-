
var database = require("../database/config")

function inserir(pergunta1, pergunta2, pergunta3) {
    var instrucao = `
        INSERT INTO formulario (pergunta1, pergunta2, pergunta3) VALUES 
        ('${pergunta1}', '${pergunta2}', '${pergunta3}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    inserir
};