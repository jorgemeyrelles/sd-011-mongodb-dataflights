db.voos.find({ $and: [
  { litrosCombustivel: { $exists: 1 } },
  { litrosCombustivel: { $lt: 600 } },
  { "empresa.nome": { $nin: ["GOL", "AZUL"] } }] },
  { litrosCombustivel: 1, "empresa.nome": 1, vooId: 1, _id: 0 }).limit(1);