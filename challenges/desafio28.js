const LATAM = "LATAM AIRLINES BRASIL";
const VOOS_DOMESTICOS_LATAM = db.voos.count(
  {
    "empresa.nome": LATAM,
    natureza: "Doméstica",
  },
);

db.resumoVoos.insertOne(
  {
    empresa: LATAM,
    totalVoosDomesticos: VOOS_DOMESTICOS_LATAM,
  },
);

db.resumoVoos.findOne(
  { empresa: LATAM },
  {
    _id: 0,
    empresa: 1,
    totalVoosDomesticos: 1,
  },
);
