const express = require('express');
const {
  usersGet,
  usersGetById,
  usersPost,
  usersDelete,
} = require('../controllers/users');
const {
  verifyToken,
  checkAdminRoles,
} = require('../utils/middleware/auth/auth');

function usersApi(app) {
  const router = express.Router();

  app.use('/api/users', router);

  router.get('/', usersGet);
  router.get('/:id', usersGetById);
  router.post('/', verifyToken, checkAdminRoles, usersPost);
  router.delete('/:id', verifyToken, checkAdminRoles, usersDelete);
}

module.exports = usersApi;
