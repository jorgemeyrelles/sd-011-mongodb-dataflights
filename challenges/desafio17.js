db.voos.find({ "natureza": { $ne: "Doméstica" } }).count();