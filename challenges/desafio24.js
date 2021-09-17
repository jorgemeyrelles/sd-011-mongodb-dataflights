const data = { $and: [{ litrosCombustivel: { $lte: 600 } },
    { "empresa.nome": { $nin: ["GOL", "AZUL"] } }] };

db.voos.find(data, 
  { _id: false, vooId: true, "empresa.nome": true, litrosCombustivel: true }).limit(1);    