db.voos.find({ "aeroportoOrigem.país": { $ne: "BRASIL" } }).count();
