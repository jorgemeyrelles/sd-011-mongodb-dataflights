db.voos.find({ ano: { $lt:2016 }}).count();
// https://docs.mongodb.com/manual/reference/operator/query/lt/
// Referencia maior que para resolução do exercicio