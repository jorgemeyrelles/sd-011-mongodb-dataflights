db.voos.find({ "empresa.nome": "GOL",ano: 2017 },
{ _id: 0,vooId: 1,"aeroportOrigem.nome": 1,mes: 1 }).limit(10);