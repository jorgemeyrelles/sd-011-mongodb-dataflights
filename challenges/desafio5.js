db.voos.find({}, { vooId: 1, _id: -1 }).skip(9).limit(3);
