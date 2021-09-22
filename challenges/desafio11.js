db.voos.find({ "aeroportoDestino.pais": { $ne: "ESTADOS UNIDOS" } }).count();

// https://docs.mongodb.com/manual/reference/operator/query/ne/