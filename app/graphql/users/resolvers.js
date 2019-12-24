const logger = require('../../logger');
const usersService = require('../../services/users');
const postsService = require('../../services/posts');

const getUser = (_, params) => {
  logger.info('Fetching user...');
  return usersService.getUser(params).catch(error => {
    logger.error(`Could not fetch user. Error: ${error.message}`);
    return Promise.reject(error);
  });
};

const getUsers = () => {
  logger.info('Fetching users...');
  return usersService.getUsers().catch(error => {
    logger.error(`Could not fetch the list of users. Error: ${error.message}`);
    return Promise.reject(error);
  });
};

const getPosts = ({ id: userId }) => {
  logger.info('Fetching user posts...');
  return postsService.getPosts({ userId }).catch(error => {
    logger.error(`Could not fetch the list of posts. Error: ${error.message}`);
    return Promise.reject(error);
  });
};

module.exports = {
  Query: {
    user: getUser,
    users: getUsers
  },
  User: {
    posts: getPosts
  }
};
