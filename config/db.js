const config = require('../config').common.database;

module.exports = {
  development: {
    databaseUrl: config.databaseUrl,
    username: config.username,
    password: config.password,
    database: config.name,
    host: config.host,
    dialect: 'postgres',
    logging: true
  },
  testing: {
    databaseUrl: config.databaseUrl,
    username: config.username,
    password: config.password,
    database: config.name,
    host: config.host,
    dialect: 'postgres',
    logging: false
  },
  production: {
    databaseUrl: config.databaseUrl,
    username: config.username,
    password: config.password,
    database: config.name,
    host: config.host,
    dialect: 'postgres',
    logging: false
  }
};
