db.voos.find({ litrosCombustive: { $gte: 1000 } }, { _id: false, vooId: true }).limit(1);
