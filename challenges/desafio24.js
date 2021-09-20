db.voos.find(
  {
    litrosCombustivel: { $exists: 1, $lte: 600, $nin: ["GOL", "AZUL"] },
  },
  {
    vooId: 1,
    "empresa.nome": 1,
    litrosCombustivel: 1,
    _id: 0,
  },
).limit(1);
