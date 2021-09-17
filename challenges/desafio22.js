const data = { $and: [{ "empresa.nome": { $in: ["DELTA AIRLINES", "AMERICAN AIRLINES"] } },
    { "aeroportoOrigem.sigla": { $eq: "SBGR" } },
    { "aeroportoDestino.sigla": { $eq: "KJFK" } }] };

db.voos.find(data, { _id: false, vooId: true }).limit(1);
