const empresa = "LATAM AIRLINES BRASIL";
db.resumoVoos.insertOne({
  empresa,
  totalVoosDomesticos: (db.voos.find({
    "empresa.nome": empresa,
    natureza: "Doméstica",
  }).count()),
});

db.resumoVoos.find({
  empresa,
}, {
  _id: 0,
});
