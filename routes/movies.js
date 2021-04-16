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
     .then(movies => {
       if (movies.length === 0){
          var err = new Error('The title you requested does not exist. Please try again.');
          err.status = 404;
          res.status(err.status).send(err.message)
       } else {
        res.json(movies)
       }
     });
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
    .then(movies => {
        if(movies.length === 0) {
            var err = new Error('The movie you requested has no results. Please search for another movie.')
            err.status = 404;
            res.status(err.status).send(err.message)
        } else {
       res.json(movies)
    }
  })
});

router.post('/', function (req, res, next) {
   knex('movies')
   .insert(req.body)
   .then(result => {
     res.send(`Your movie was added ${JSON.stringify(req.body)}`)
   })
   .catch(err => console.log(err));
});

router.delete('/:movieId', function (req, res, next) {
    knex('movies')
    .where({id: (req.params.movieId)})
    .del()
    .then(results => res.send(`Your movie has been deleted MovieID: ${req.params.movieId}`))
});




module.exports = router;



