// 27 - Retorne a quantidade total de voos de natureza Doméstica que a empresa
// PASSAREDO possui, via uso de uma nova coleção chamada resumoVoos.

// Conte quantos voos da empresa PASSAREDO cujo campo natureza possua valor igual
// a Doméstica e crie uma query que insira na coleção resumoVoos um documento com
// os campos: empresa (nome da empresa) e totalVoosDomesticos 
// (o total retornado anteriormente).
// db.voos.count({ $and: [
//   { "empresa.nome": "PASSAREDO" },
//   { natureza: "Doméstica" },
// ] }); // 4187

// db.resumoVoos.insertOne({
//   empresa: "PASSAREDO",
//   totalVoosDomesticos: 4187,
// });

// Em uma segunda query, retorne a empresa e o totalVoosDomesticos do primeiro
// documento presente na coleção resumoVoos em que a empresa seja PASSAREDO.
// db.resumoVoos.find(
//   { empresa: "PASSAREDO" },
//   { empresa: 1, totalVoosDomesticos: 1, _id: 0 },
// );
{ "empresa" : "PASSAREDO", "totalVoosDomesticos" : 4187 }
