use('dataFlights')

db.voos.find(
  { ano: { $gt: 2017 } }
).count();
