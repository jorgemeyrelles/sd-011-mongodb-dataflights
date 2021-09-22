db.voos.find({ ano: { $in: [2017, 2018] } }).count();
// https://docs.mongodb.com/manual/reference/operator/query/lt/
// Referencia maior que para resolução do exercicio