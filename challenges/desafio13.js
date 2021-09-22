db.voos.find({ "aeroportoDestino.continente": { $ne: ["EUROPA", "ÁSIA", "OCEANIA"] } }).count();

// https://docs.mongodb.com/manual/reference/operator/query/ne/