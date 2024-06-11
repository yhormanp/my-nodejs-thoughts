const express = require('express');

function articlesApi (app) {
  const router = express.Router();

  app.use('/api/articles', router);

  router.get('/', (req, res) => {
    res.json({ message: 'this is the articles' });
  });
}

module.exports = {
  articlesApi
};
