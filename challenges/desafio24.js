db.voos.find({
    $nor: [{ "empresa.nome": "GOL" }, { "empresa.nome": "AZUL" }],
    litrosCombustivel: { $lt: 600, $exists: true },
}, {
    _id: 0,
    vooId: 1,
    "empresa.nome": 1,
    litrosCombustivel: 1,
}).limit(1);
