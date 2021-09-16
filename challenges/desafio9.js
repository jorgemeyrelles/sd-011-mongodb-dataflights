db.voos.countDocuments(
  {
    $and: [
      { ano: { $gte: 2017 } },
      { ano: { $lte: 2018 } },
    ],
  },
);
