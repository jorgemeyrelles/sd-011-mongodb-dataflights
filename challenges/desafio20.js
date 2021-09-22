db.voos.findOne({ rtk: { $exists: false } }, 
    { id: 0, vooId: 1 });