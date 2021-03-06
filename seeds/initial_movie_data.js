
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('movies').del()
    .then(function () {
      // Inserts seed entries
      return knex('movies').insert([
        {title: 'Midnight In Paris', runtime: '96', release_year: '2011-01-01', director: 'Woody Allen' },
        {title: 'Titanic', runtime: '210', release_year: '1997-01-01', director: 'James Cameron' },
        {title: 'From Paris With Love', runtime: '94', release_year: '2010-01-01', director: 'Pierre' }
      ]);
    });
};



