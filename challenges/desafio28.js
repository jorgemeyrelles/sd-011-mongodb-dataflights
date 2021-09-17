const airlineName = "LATAM AIRLINES BRASIL";

db.resumoVoos.insertOne(
  {
    empresa: airlineName,
    totalVoosDomesticos: db.voos.find(
      {
        "empresa.nome": airlineName,
        natureza: "Doméstica",
      },
    ).count(),
  },
);

db.resumoVoos.findOne({ empresa: airlineName }, { _id: 0 });