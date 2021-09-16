db.voos.find(
  { litrosCombustivel: { $lte: 600 },
  "empresa.nome": { $nin: ["AZUL", "GOL"] } },
  { _id: 0, vooId: 1, litrosCombustivel: 1, "empresa.nome": 1 },
).limit(1);