db.voos.deleteMany({ "empresa.nome": "GOL",
"passageiros.pagos": { $gte: 5, $lte: 10 } });
// https://www.mongodbtutorial.org/mongodb-crud/mongodb-deletemany/