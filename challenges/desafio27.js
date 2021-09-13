db.resumoVoos.insertOne(
  { empresa: "PASSAREDO",
  totalVoosDomesticos: db.voos.find(
    { $and: [{ "empresa.nome": { $eq: "PASSAREDO" } }, { natureza: { $eq: "Doméstica" } }] },
  ).count()
  ,
  },
);

db.resumoVoos.find({}, { _id: 0, empresa: 1, totalVoosDomesticos: 1 });