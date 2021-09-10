const PASSAREDO = "PASSAREDO";

db.resumoVoos.insertMany([
  {  
   empresa: PASSAREDO,
   totalVoosDomesticos: db.voos.count({ $and: [
   { "empresa.nome": PASSAREDO }, 
   { natureza: "Doméstica" }] }),
  },
]);
  
db.resumoVoos.findOne({ empresa: PASSAREDO },
 { empresa: 1, totalVoosDomesticos: 1, _id: 0 });
