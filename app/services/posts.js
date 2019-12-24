const { Post } = require('../models');
const { databaseError } = require('../errors');

exports.getPost = params =>
  Post.findOne({ where: params }).catch(error =>
    Promise.reject(databaseError(`${error.name}: ${error.message}`))
  );

exports.getPosts = params =>
  Post.findAll({ where: params }).catch(error =>
    Promise.reject(databaseError(`${error.name}: ${error.message}`))
  );
