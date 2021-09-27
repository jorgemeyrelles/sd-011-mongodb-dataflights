const companyName = "LATAM AIRLINES BRASIL";

db.resumoVoos.insertOne({
  empresa: companyName,
  totalVoosDomesticos: db.voos.count({
    "empresa.nome": "companyName",
    natureza: "Doméstica",
  }),
});

db.resumoVoos.findOne(
  { empresa: "LATAM AIRLINES BRASIL" },
  { _id: 0 },
);
