db.voos.find({ "aeroportoOrigem.pais": { $ne: "BRASIL" } }).count();

// https://docs.mongodb.com/manual/reference/operator/query/ne/