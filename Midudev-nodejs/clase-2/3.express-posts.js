const express = require('express');

function postsAPI (app) {
  const router = express.Router();

  app.use('/api/posts', router);

  router.get('/', (req, res, next) => {
    const POST_API_URL = 'https://jsonplaceholder.typicode.com/posts';
    fetch(POST_API_URL)
      .then((res) => res.json())
      .then((data) => {
        res.json(data)
      })
      .catch((err) => {
        next(err);
      });
  });
}

module.exports = {
  postsAPI
};
