
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {
          VIN: 5555,
          Make: "Toyota",
          Model: "Camry",
          Mileage: 1000
        },
        {
          VIN: 4444,
          Make: "Chevrolet",
          Model: "Camaro",
          Mileage: 3000
        },
        {
          VIN: 3333,
          Make: "Honda",
          Model: "Accord",
          Mileage: 7000
        },
      ]);
    });
};
