const EMPRESA = "LATAM AIRLINES BRASIL";
db.resumoVoos.insertOne({
  empresa: EMPRESA,
  totalVoosDomesticos: db.voos.count({ "empresa.nome": EMPRESA, natureza: "Doméstica" }),
});

db.resumoVoos.findOne({ empresa: EMPRESA }, { _id: 0, empresa: 1, totalVoosDomesticos: 1 });