const EMPRESA = "LATAM AIRLINES BRASIL";
db.resumoVoos.insertOne({
  empresa: EMPRESA,
  totalVoosDomesticos: db.voos.count({ 
    natureza: "Doméstica",
    "empresa.nome": EMPRESA,
   }),
});
db.resumoVoos.find({
  empresa: EMPRESA,
},
{
  empresa: 1,
  totalVoosDomesticos: 1,
  _id: 0,
});
