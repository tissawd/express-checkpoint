var express = require('express');
var router = express.Router();
const knex = require('knex')(require('../knexfile')['development']);

router.get('/', function (req, res, next){
    knex
    .from('movies')
    .select('*')
    .then(movies => res.json(movies));
});


module.exports = router;
