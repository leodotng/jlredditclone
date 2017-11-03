// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: 'postgres://localhost/jlredditclone',
    },
  production: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL
  }
};
