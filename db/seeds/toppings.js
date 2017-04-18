
exports.seed = function(knex, Promise) {
  return knex.raw(
    "TRUNCATE toppings RESTART IDENTITY;"
  )
  .then(() => {
    return knex('toppings').insert([
      {name: 'Coffee Drizzle', price: .18},
      {name: 'Chocolate Icing', price: .23},
      {name: 'Sprinkles', price: .32},
      {name: 'Maple Icing', price: .25},
      {name: 'Bacon', price: .99},
    ]);
  });
};
