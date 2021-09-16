db.voos.deleteMany({ "empresa.nome": "GOL", "passageiros.pagos": { $gt: 4, $lt: 11 } });
