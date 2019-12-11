const { user: User } = require('../../models');

const getUser = (_, params) => User.getOne(params);
const getUsers = (_, params) => User.getAll(params);

module.exports = {
  Query: {
    user: getUser,
    users: getUsers
  },
  User: {
    email: root => root.email
  }
};
