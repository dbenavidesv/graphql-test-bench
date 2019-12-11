const { User } = require('../../models');

const getUser = () => ({
  id: 1,
  name: 'Daniel',
  username: 'jazz',
  email: 'js@wolox.co'
});
const getUsers = (_, params) => User.getAll(params);

const getPosts = () => [
  {
    id: 1,
    userId: 1,
    title: 'user 1 post 1',
    description: 'user 1 post 1',
    upvotes: 234,
    downvotes: 233
  },
  {
    id: 2,
    userId: 1,
    title: 'user 1 post 2',
    description: 'user 1 post 2',
    upvotes: 234,
    downvotes: 233
  }
];

const getOrders = () => [
  {
    id: 1,
    userId: 1
  },
  {
    id: 2,
    userId: 1
  }
];

module.exports = {
  Query: {
    user: getUser,
    users: getUsers
  },
  User: {
    posts: getPosts,
    orders: getOrders
  }
};
