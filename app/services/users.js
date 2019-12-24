const { User } = require('../models');
const { databaseError } = require('../errors');

exports.getUser = params =>
  User.findOne({ where: params }).catch(error =>
    Promise.reject(databaseError(`${error.name}: ${error.message}`))
  );

exports.getUsers = () =>
  User.findAll().catch(error => Promise.reject(databaseError(`${error.name}: ${error.message}`)));
