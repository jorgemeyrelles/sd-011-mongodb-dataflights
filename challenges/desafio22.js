db.voos.findOne(
  { $and: [
    { "empresa.nome": { $in: ["DELTA AIRLINES", "AMERICAN AIRLINES"] } },
    { "aeroportoDestino.sigla": "KJFK", "aeroportoOrigem.sigla": "SBGR" },
  ] },
  { _id: 0, vooId: 1 },
);
