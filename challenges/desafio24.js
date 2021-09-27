db.voos.findOne(
  { litrosCombustivel: { $not: { $gt: 600 }, $exists: true }, "empresa.nome": { $not: { $in: ["GOL", "AZUL"] } } },
  { _id: 0, vooId: 1, "empresa.nome": 1, litrosCombustivel: 1 },
);
