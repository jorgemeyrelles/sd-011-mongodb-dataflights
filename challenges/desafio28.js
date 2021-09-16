const empresa = "LATAM AIRLINES BRASIL";

db.resumoVoos.insertOne({
  empresa,
  totalVoosDomesticos: db.voos.count(
    { "empresa.nome": "LATAM AIRLINES BRASIL", natureza: "Doméstica" },
  ),
});

db.resumoVoos.findOne(
  { empresa },
  { _id: 0, empresa: 1, totalVoosDomesticos: 1 },
);
