db.resumoVoos.insert(
    { empresa: "PASSAREDO",

    totalVoosDomesticos: db.voos.find(
        { natureza: "Doméstica", "empresa.nome": "PASSAREDO" },
    ).count(),
},
);

db.resumoVoos.find(
    { empresa: "PASSAREDO" },
    { empresa: 1, totalVoosDomesticos: 1, _id: 0 },
);
