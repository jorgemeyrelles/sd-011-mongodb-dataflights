db.voos.find({ rtk: { $exists: false } },
{ vooId: 1,
_id: 0 }).limit(1);

// https://www.mongodbtutorial.org/mongodb-crud/mongodb-exists/