var database = require("../database/config");

function listarBarra() {
    console.log("2 -Cheguei no models da listarBarra: /n");
    var instrucao = `
        SELECT
            pilar,
            COUNT(pilar) AS quantidade
        FROM (
            -- Tenta extrair o primeiro pilar
            SELECT TRIM(SUBSTRING_INDEX(SUBSTRING_INDEX(pergunta2, ',', 1), ',', -1)) AS pilar
            FROM formulario
            WHERE pergunta2 IS NOT NULL AND pergunta2 != ''

            UNION ALL

            -- Tenta extrair o segundo pilar
            SELECT TRIM(SUBSTRING_INDEX(SUBSTRING_INDEX(pergunta2, ',', 2), ',', -1)) AS pilar
            FROM formulario
            WHERE pergunta2 IS NOT NULL AND LENGTH(pergunta2) - LENGTH(REPLACE(pergunta2, ',', '')) >= 1

            UNION ALL

            -- Tenta extrair o terceiro pilar
            SELECT TRIM(SUBSTRING_INDEX(SUBSTRING_INDEX(pergunta2, ',', 3), ',', -1)) AS pilar
            FROM formulario
            WHERE pergunta2 IS NOT NULL AND LENGTH(pergunta2) - LENGTH(REPLACE(pergunta2, ',', '')) >= 2

            UNION ALL

            -- Tenta extrair o quarto pilar
            SELECT TRIM(SUBSTRING_INDEX(SUBSTRING_INDEX(pergunta2, ',', 4), ',', -1)) AS pilar
            FROM formulario
            WHERE pergunta2 IS NOT NULL AND LENGTH(pergunta2) - LENGTH(REPLACE(pergunta2, ',', '')) >= 3

            UNION ALL

            -- Tenta extrair o quinto pilar
            SELECT TRIM(SUBSTRING_INDEX(SUBSTRING_INDEX(pergunta2, ',', 5), ',', -1)) AS pilar
            FROM formulario
            WHERE pergunta2 IS NOT NULL AND LENGTH(pergunta2) - LENGTH(REPLACE(pergunta2, ',', '')) >= 4
        ) AS PilaresSeparados
        WHERE
            pilar IS NOT NULL AND pilar != '' -- Garante que apenas pilares válidos sejam contados
        GROUP BY
            pilar
        ORDER BY
            quantidade DESC;
    `;
    console.log("Executando instrução SQL: \n" + instrucao);

    return database.executar(instrucao);
}

function listarBarra1() {
    console.log("2 -Cheguei no models da listarBarra1: /n");
    var instrucao = `
      SELECT 
            'Inglês' AS idioma,
            SUM(qtd_acertoIngles) AS total_acertos
        FROM partida

        UNION ALL

        SELECT 
            'Espanhol' AS idioma,
            SUM(qtd_acertoEspanhol) AS total_acertos
        FROM partida

        UNION ALL

        SELECT 
            'Francês' AS idioma,
            SUM(qtd_acertoFrances) AS total_acertos
        FROM partida

        ORDER BY total_acertos DESC;
    `;
    console.log("Executando instrução SQL: \n" + instrucao);

    return database.executar(instrucao);
}

function listarPizza() {
    console.log("2 -Cheguei no models da listarPizza: /n");
    var instrucao = `
      SELECT 
    pergunta1 AS modelo_estudo,
    COUNT(*) AS Quantidades
    FROM 
        formulario
    GROUP BY 
        pergunta1
    ORDER BY 
    Quantidades desc;
    `;
    console.log("Executando instrução SQL: \n" + instrucao);

    return database.executar(instrucao);
}

function listarIdioma() {
    console.log("2 -Cheguei no models da listar: /n");
    var instrucao = `
      SELECT 
            idioma,
            total_acertos
        FROM (
            SELECT 'Inglês' AS idioma, SUM(qtd_acertoIngles) AS total_acertos FROM partida
            UNION ALL
            SELECT 'Espanhol', SUM(qtd_acertoEspanhol) FROM partida
            UNION ALL
            SELECT 'Francês', SUM(qtd_acertoFrances) FROM partida
        ) AS ranking
        ORDER BY 
            total_acertos DESC
        LIMIT 1;
    `;
    console.log("Executando instrução SQL: \n" + instrucao);

    return database.executar(instrucao);
}

function listarEstudo() {
    console.log("2 -Cheguei no models da listar: /n");
    var instrucao = `
      SELECT 
            pergunta3 AS estilo_estudo,
            COUNT(*) AS total_usuarios
        FROM 
            formulario
        GROUP BY 
            pergunta3
        ORDER BY 
            total_usuarios DESC
        LIMIT 1;
    `;
    console.log("Executando instrução SQL: \n" + instrucao);

    return database.executar(instrucao);
}




module.exports = {
    listarBarra,
    listarBarra1,
    listarPizza,
    listarIdioma,
    listarEstudo
};