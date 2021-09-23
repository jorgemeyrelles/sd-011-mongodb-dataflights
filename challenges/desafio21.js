db.voos.find({ litrosCombustivel: { $gte: 1000 } },
    { vooId: 1,
    _id: 0 }).limit(1);
    // https://www.mongodbtutorial.org/mongodb-crud/