db.resumoVoos.insertOne({
  empresa: "LATAM AIRLINES BRASIL",
  totalVoosDomesticos: db.voos.find({
    "empresa.nome": "LATAM AIRLINES BRASIL",
    natureza: "Doméstica",
  }).count(),
});

db.resumoVoos.findOne({}, {
  empresa: 1,
  totalVoosDomesticos: 1,
  _id: 0,
});
