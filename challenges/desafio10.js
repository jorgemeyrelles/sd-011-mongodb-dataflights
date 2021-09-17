const data = {
  _id: false,
  vooId: true,
  "empresa.nome": true,
  "aeroportoOrigem.nome": true,
  "aeroportoDestino.nome": true,
  mes: true,
  ano: true,
};

db.voos.find({ $and: [{ "empresa.nome": "GOL" }, { ano: 2017 }] }, data).limit(10);
