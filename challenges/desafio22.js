db.voos.find({ $and: [{ "aeroportoOrigem.sigla": "SBGR" },
{ "aeroportoDestino.sigla": "KJFK" },
{ "empresa.nome": { $in: ["DELTA AIRLINES", "AMERICAN AIRLINES"] } }] },
{ _id: false, vooId: true }).limit(1);
