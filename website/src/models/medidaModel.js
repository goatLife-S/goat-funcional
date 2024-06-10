var database = require("../database/config");

function buscarMedidasDoDia(idUsuario) {
    var instrucaoSql = `
        SELECT 
            m.dht11_temperatura, 
            m.dht11_umidade,
            DATE_FORMAT(m.dtCaptura, '%H:%i:%s') as dtCaptura
        FROM medida m
        JOIN sensores s ON m.fkSensores = s.idSensores
        JOIN capril c ON s.fkCaprilSensor = c.idCapril
        JOIN fazenda f ON c.fkFazenda = f.idFazenda
        WHERE f.idFazenda = ${idUsuario}
        AND DATE(m.dtCaptura) = CURDATE()
        ORDER BY m.dtCaptura DESC;
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarMedidasDoDia
}
