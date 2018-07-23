// Update with your config settings.

module.exports = {

  development: {
    client: 'mysql',
    version: '5.7.22',
    connection: {
      host: 'localhost',
      user: 'root',
      database: 'gettinn_dev',
      user:     'root',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 50
    },
  },
  production: {
    client: 'mysql',
    connection: {
      host: 'localhost',
      user: 'root',
      database: 'gettinn_prod',
      user:     'root',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 100
    },    
  }
};
