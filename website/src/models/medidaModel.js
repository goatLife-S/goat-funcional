var database = require("../database/config");

function buscarMedidasDoDia(idUsuario) {
    var instrucaoSql = `
        SELECT
    dht11_temperatura,
    dht11_umidade,
    dtCaptura
FROM
    medida
ORDER BY
    dtCaptura DESC
LIMIT 10;
;
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarMedidasDoDia
}
