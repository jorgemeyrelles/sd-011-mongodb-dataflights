db.voos.find({ "empresa.nome": "GOL", ano: 2017 },
{ vooId: 1,
"aeroportOrigem.nome": 1,
"aeroportoDestino.nome": 1,
mes: 1,
ano: 1,
_id: 0 }).limit(10);