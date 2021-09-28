const empresaAerea = "LATAM AIRLINES BRASIL";
const voos = db.voos.find({
  $and: [
    { natureza: "Doméstica" },
    { "empresa.nome": empresaAerea },
  ] }).count();

db.resumoVoos.insertOne({ empresa: empresaAerea,
  totalVoosDomesticos: voos });
db.resumoVoos.find({ empresa: empresaAerea }, { empresa: 1, totalVoosDomesticos: 1, _id: 0 });