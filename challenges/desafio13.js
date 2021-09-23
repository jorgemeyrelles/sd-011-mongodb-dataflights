db.voos.find({ "aeroportoDestino.continente": { $in: ["EUROPA", "ÁSIA", "OCEANIA"] } }).count();
// $ in - seleciona documentos onde o valor de um campo é igual a qualquer valor em uma matriz
// https://docs.mongodb.com/manual/reference/operator/query/in/