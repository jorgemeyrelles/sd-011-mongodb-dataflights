db.voos.findOne({ litrosCombustivel: { $lt: 600 },
  "empresa.nome": { $not: { $in: ["GOL", "AZUL"] } } },
{ _id: 0, vooId: 1, litrosCombustivel: 1, "empresa.nome": 1 });
