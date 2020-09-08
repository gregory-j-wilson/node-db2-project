const express = require('express');
const knex = require('knex');

// const sqliteConfig = knex({
//   client: 'sqlite3',
//   connection: {
//     filename: './data/produce.db3'
//   },
//   useNullAsDefault: true
// });

const db = require('../connection')

const router = express.Router();


// CREATE CAR
router.post('/', (req, res) => {

    const newCar = req.body

    db('cars')
        .insert(newCar)
        .returning('id')
        .then(id => {
            res.status(200).json({data: id})
        })
        .catch(err => {
            res.status(500).json({error: err.message})
        })

});

// READ CAR
router.get('/', (req, res) => {

    db.select('*').from('cars')
        .then(cars => {
            res.status(200).json({data: cars})
        })
        .catch(error => {
            res.status(500).json({error: error.message})
        })

});



router.get('/:id', (req, res) => {
 
});


router.delete('/:id', (req, res) => {
 
});

module.exports = router;