var database = require("../database/config");

function listarBarra() {
    console.log("2 -Cheguei no models da listarBarra: /n");
    var instrucao = `
      
    `;
    console.log("Executando instrução SQL: \n" + instrucao);

    return database.executar(instrucao);
}

function listarBarra1() {
    console.log("2 -Cheguei no models da listarBarra1: /n");
    var instrucao = `
      
    `;
    console.log("Executando instrução SQL: \n" + instrucao);

    return database.executar(instrucao);
}

function listar() {
    console.log("2 -Cheguei no models da listar: /n");
    var instrucao = `
      
    `;
    console.log("Executando instrução SQL: \n" + instrucao);

    return database.executar(instrucao);
}
module.exports = {
    listarBarra,
    listarBarra1,
    listar
};