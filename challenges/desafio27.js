const voos = db.voos.find({
  $and: [
    { natureza: "Doméstica" },
    { "empresa.nome": "PASSAREDO" },
  ] }).count();

db.resumoVoos.insertOne({ empresa: "PASSAREDO",
  totalVoosDomesticos: voos });
db.resumoVoos.find({ empresa: "PASSAREDO" }, { empresa: 1, totalVoosDomesticos: 1, _id: 0 });