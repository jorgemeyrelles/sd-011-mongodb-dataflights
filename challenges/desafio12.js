db.voos.find({ "aeroportoDestino.pais": { $in: ["BRASIL", "ARGENTINA", "CHILE"] } }).count();
// in seleciona documentos onde o valor de um acampo é igual a qualquer valor em uma matriz
// https://www.mongodbtutorial.org/mongodb-crud/