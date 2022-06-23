const express = require('express');

const {
  authorsGet,
  authorsGetid,
  authorsPost,
  authorsPatchId,
  authorsPut,
  authorsDelete,
} = require('../controllers/authors');
const {
  verifyToken,
  checkAdminRoles,
} = require('../utils/middleware/auth/auth');

function authorsApi(app) {
  const router = express.Router();
  app.use('/api/authors', router);

  router.get('/', authorsGet);
  router.get('/:id', authorsGetid);
  router.post('/', verifyToken, checkAdminRoles, authorsPost);
  router.patch('/:id', verifyToken, checkAdminRoles, authorsPatchId);
  router.put('/:id', verifyToken, checkAdminRoles, authorsPut);
  router.delete('/:id', verifyToken, checkAdminRoles, authorsDelete);
}

module.exports = authorsApi;
