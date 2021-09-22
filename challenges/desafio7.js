db.voos.find({ ano: { $lt:2017 }}).count();
// https://docs.mongodb.com/manual/reference/operator/query/lt/
// Referencia menor que para resolução do exercicio