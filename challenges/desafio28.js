const ciaAerea = "LATAM AIRLINES BRASIL";

db.resumoVoos.insertOne({
  empresa: ciaAerea,
  totalVoosDomesticos: db.voos.count({
    "empresa.nome": ciaAerea,
    natureza: "Doméstica",
  }),
});

db.resumoVoos.findOne(
  { empresa: "LATAM AIRLINES BRASIL" },
  { _id: 0, empresa: 1, totalVoosDomesticos: 1 },
);