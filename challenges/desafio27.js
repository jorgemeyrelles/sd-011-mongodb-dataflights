const ciaAerea = "PASSAREDO"; 

db.resumosVoos.insertOne({
  empresa: ciaAerea,
  totalVoosDomesticos: db.voos.count({
    "empresa.nome": ciaAerea,
    natureza: "Doméstica",
  }),
});

db.resumosVoos.findOne(
  { empresa: "PASSAREDO" },
  { _id: 0, empresa: 1, totalVoosDomesticos: 1 },
);