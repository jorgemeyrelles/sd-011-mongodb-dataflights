// 10 - Retorne apenas os 10 primeiros documentos com voos da empresa GOL do ano de 2017. Exiba apenas os campos vooId, empresa.nome, aeroportoOrigem.nome, aeroportoDestino.nome, mes e ano.
db.voos
  .find(
    { $and: [{ "empresa.nome": "GOL" }, { ano: 2017 }] },
    {
      _id: false,
      vooId: true,
      "empresa.nome": true,
      "aeroportoOrigem.nome": true,
      "aeroportoDestino.nome": true,
      mes: true,
      ano: true,
    },
  )
  .limit(10);
