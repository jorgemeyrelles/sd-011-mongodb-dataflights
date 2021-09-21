db.voos.find({ $and: [ 
  { litrosCombustivel: { $lt: 600 } },
  { $or: [{ "empresa.nome": { $ne: "GOL" } }, { "empresa.nome": { $ne: "AZUL" } }] },
  { litrosCombustivel: { $exists: true } }] }, 
  { _id: 0, "empresa.nome": 1, litrosCombustivel: 1, vooId: 1 }).limit(1);
