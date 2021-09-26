db.voos.findOne(
  {
    litrosCombustivel: { $exists: true, $lte: 600 },
    "empresa.nome": { $nin: ["GOL", "AZUL"] },
  },
  { vooId: true, "empresa.nome": true, litrosCombustivel: true, _id: false },
);
