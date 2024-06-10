var medidaModel = require("../models/medidaModel");

function buscarMedidasDoDia(req, res) {
    var idUsuario = req.params.idUsuario;

    console.log(`Recuperando medidas do dia atual para o usuário ${idUsuario}`);

    medidaModel.buscarMedidasDoDia(idUsuario).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send([]);
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as medidas do dia.", erro.sqlMessage);
        res.status(500).json({ error: erro.sqlMessage });
    });
}

module.exports = {
    buscarMedidasDoDia
}
