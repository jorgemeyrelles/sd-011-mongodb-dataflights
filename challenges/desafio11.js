db.voos.count(
    { "aeroportoDestino.país": { $ne: "ESTADOS UNIDOS" } },
);
