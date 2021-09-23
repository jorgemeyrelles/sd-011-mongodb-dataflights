db.voos.find({
  $and: [{ litrosCombustivel: { $exists: true } },
  { litrosCombustivel: { $lte: 600 } },
  { empresa: { $nin: ["GOL", "azul"] } }],
},
{ _id: false, vooId: true, "empresa.nome": true, litrosCombustivel: true }).limit(1);
