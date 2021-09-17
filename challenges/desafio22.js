db.voos.findOne({ "empresa.nome": /^(DELTA|AMERICAN) AIRLINES$/, "aeroportoOrigem.sigla": "SBGR", "aeroportoDestino.sigla": "KJFK" }, { _id: 0, vooId: 1 });
