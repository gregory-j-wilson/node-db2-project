
exports.up = function(knex) {

    return knex.schema.createTable('cars', tbl => {
        tbl.increments('id')
        tbl.integer('VIN')
        tbl.string('Make', 128)
        tbl.string('Model', 128)
        tbl.integer('Mileage')
    })
  
};

exports.down = function(knex) {
  
    return knex.schema.dropTableIfExists('cars')

};
