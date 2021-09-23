const nomeEmpresa = "LATAM AIRLINES BRASIL";

db.resumoVoos.insertOne({ empresa: nomeEmpresa,
totalVoosDomesticos: db.voos.count({
  "empresa.nome": nomeEmpresa,
  natureza: "Doméstica",
}) });

db.resumoVoos.findOne({ empresa: nomeEmpresa }, { _id: false });
