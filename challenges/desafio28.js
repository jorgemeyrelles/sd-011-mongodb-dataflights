const nomeEmpresa = "LATAM AIRLINES BRASIL";

db.resumoVoos.insertOne(
  {
    empresa: nomeEmpresa,
    totalVoosDomesticos: db
      .voos.count(
        { 
          $and: [
            { "empresa.nome": nomeEmpresa },
            { natureza: "Doméstica" },
          ],
        },
      ),
  },
);

db.resumoVoos.findOne(
  {
    empresa: nomeEmpresa,
  },
  {
    _id: 0,
    empresa: 1,
    totalVoosDomesticos: 1,
  },
);
