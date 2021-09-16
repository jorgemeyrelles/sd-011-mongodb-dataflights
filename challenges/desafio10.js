db.voos.find(
  { 
    "empresa.nome": { $eq: "GOL" },
    ano: { $eq: 2017 },
  },
  {
    _id: 0,
    vooID: 1,
    "empresa.nome": 1,
    "aeroportoOrigem.nome": 1,
    "aeroportoDestino.nome": 1,
    mes: 1,
    ano: 1,
  },
).limit(10);