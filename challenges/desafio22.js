db.voos.find({ "empresa.nome": { $in: ["DELTA AIRLINES", "AMERICAN AIRLINES"] },
"aeroportoOrigem.sigla": "SBGR", "aeroportoDestino.sigla": "KJFK" },
{ _id: 0, vooId: 1 }).limit(1);
// in seleciona documentos onde o valor de um acampo é igual a qualquer valor em uma matriz
// https://www.mongodbtutorial.org/mongodb-crud/