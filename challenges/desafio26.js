db.voos.deleteMany(
    {
      $and: [
        { "passageiros.pagos": { $lte: 10 } },
        { "passageiros.pagos": { $gte: 5 } },
        { "empresa.nome": "GOL" },
      ],
    },
);
