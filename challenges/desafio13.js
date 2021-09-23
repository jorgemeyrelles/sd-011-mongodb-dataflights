db.voos.find({ "aeroportoDestino.continente": { $nin: ["EUROPA", "ÁSIA", "OCEANIA"] } }).count();

// https://docs.mongodb.com/manual/reference/operator/query/nin/