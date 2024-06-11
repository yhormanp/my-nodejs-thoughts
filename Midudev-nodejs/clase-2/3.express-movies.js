const express = require('express');

function moviesApi (app) {
  const router = express.Router();

  app.use('/api/movies', router);

  router.get('/', (req, res) => {
    res.json({ message: 'yo soy movies' });
  });
}

module.exports = {
  moviesApi
};
