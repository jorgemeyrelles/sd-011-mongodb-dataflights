db.voos.find({ 
    $and: [ 
    { litrosCombustivel: { $exists: true } },
    { litrosCombustivel: { $lt: 1000 } }, 
    ] },
    { vooId: 1, litrosCombustivel: 1, _id: 0 }).limit(1);
