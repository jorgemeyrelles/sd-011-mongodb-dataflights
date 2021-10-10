const latam = "LATAM AIRLINES BRASIL";

db.resumoVoos.insertOne({
  empresa: latam,
  totalVoosDomesticos: db.voos
    .count({ "empresa.nome": latam, natureza: "Doméstica" }),
});

db.resumoVoos.find(
  { empresa: latam },
  { _id: 0, empresa: 1, totalVoosDomesticos: 1 },
);
