const express = require('express');
const {
  articlesGet,
  articlesDelete,
  articlesGetId,
  articlesPost,
  articlesPatchId,
  articlesPut,
} = require('../controllers/articles');
const {
  verifyToken,
  checkAdminRoles,
} = require('../utils/middleware/auth/auth');

function articlesApi(app) {
  const router = express.Router();
  app.use('/api/articles', router);

  router.get('/', articlesGet);
  router.get('/:id', articlesGetId);
  router.post('/', verifyToken, checkAdminRoles, articlesPost);
  router.patch('/:id', verifyToken, checkAdminRoles, articlesPatchId);
  router.put('/:id', verifyToken, checkAdminRoles, articlesPut);
  router.delete('/:id', verifyToken, checkAdminRoles, articlesDelete);
}

module.exports = articlesApi;
