var express = require('express');
var router = express.Router();
const knex = require('knex')(require('../knexfile')['development']);

router.get('/', function (req, res, next){
    if(req.query.title) {
     knex
     .from('movies')
     .select('*')
     .where({title: req.query.title})
     .then(movies => res.json(movies));
    } else {
    knex
    .from('movies')
    .select('*')
    .then(movies => res.json(movies));
    }
});

router.get('/:movieId', function (req, res, next){
    knex
    .from('movies')
    .select('*')
    .where('id', req.params.movieId)
    .then(movies => res.json(movies))
});



module.exports = router;
