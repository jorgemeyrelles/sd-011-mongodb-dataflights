const VOOS_DOMESTICOS_PASSAREDO = db.voos.count(
  {
    "empresa.nome": "PASSAREDO",
    natureza: "Doméstica",
  },
);

db.resumoVoos.insertOne(
  { 
    empresa: "PASSAREDO",
    totalVoosDomesticos: VOOS_DOMESTICOS_PASSAREDO,
  },
);

db.resumoVoos.findOne(
  { empresa: "PASSAREDO" },
  {
    _id: 0,
    empresa: 1,
    totalVoosDomesticos: 1,
  },
);
