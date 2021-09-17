db.voos.find({
$and: [
{ litrosCombustivel: { $lt: 600 } }, { litrosCombustivel: { $exists: true } },
],
},
{ $nor: [{ "empresa.nome": "GOL" }, { "empresa.nome": "AZUL" }] },
{ _id: 0, vooId: 1, litrosCombustivel: 1, "empresa.nome": 1 }).limit(1);
