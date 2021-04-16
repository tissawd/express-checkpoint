var express = require('express');
var router = express.Router();
const knex = require('knex')(require('../knexfile')['development']);
router.use(express.json());

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

router.post('/', function (req, res, next) {
   knex('movies')
   .insert(req.body)
   .then(result => {
     res.send(`Your movie was added ${JSON.stringify(req.body)}`)
   })
   .catch(err => console.log(err));
});



module.exports = router;
