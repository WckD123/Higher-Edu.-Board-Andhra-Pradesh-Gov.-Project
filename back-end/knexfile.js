// Update with your config settings.

module.exports = {

  development: {
    client: 'mysql',
    connection: {
      host: 'localhost',
      user: 'root',
      database: 'gettinn',
      user:     'root',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 50
    },
  },
};
