db.voos.find({ $and: [
  { litrosCombustivel: { $exists: 1 } },
  { litrosCombustivel: { $lt: 1000 } }] }, { litrosCombustivel: 1, vooId: 1, _id: 0 }).limit(1);