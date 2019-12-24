const logger = require('../../logger');
const postsService = require('../../services/posts');

const getPost = (_, params) => {
  logger.info('Fetching post...');
  return postsService.getPost(params).catch(error => {
    logger.error(`Could not fetch post. Error: ${error.message}`);
    return Promise.reject(error);
  });
};

const getPosts = (_, params) => {
  logger.info('Fetching posts...');
  return postsService.getPosts(params).catch(error => {
    logger.error(`Could not fetch the list of posts. Error: ${error.message}`);
    return Promise.reject(error);
  });
};

module.exports = {
  Query: {
    post: getPost,
    posts: getPosts
  }
};
