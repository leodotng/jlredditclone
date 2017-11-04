
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('posts').del()
    .then(function () {
      // Inserts seed entries
      return knex('posts').insert([
        {
          id: 1,
          title: 'My Vacation',
          postbody: 'It was a great trip'
        },
        {
          id: 2,
          title: 'My Homework',
          postbody: 'Lots of homework assignments'
        },
        {
          id: 3,
          title: 'My Family',
          postbody: 'I have three brothers, a sister, mom and dad.'
        }
      ]);
    });
};
