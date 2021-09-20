db.voos.findOne({
  "empresa.nome": { $in: ["DELA AIRLINES", "AMERICAN AIRLINES"] },
  "aeroportoOrigem.sigla": "SBGR",
  "aeroportoDestino.sigla": "KJFK",
}, { _id: 0, vooId: 1 });
