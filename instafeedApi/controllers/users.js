const UsersServices = require('../services/users');
const { commonResponse } = require('../utils/utils');

const usersService = new UsersServices();

const usersGet = async (req, res, next) => {
  try {
    const users = await usersService.getUsers();
    commonResponse(res, 200, users, 'Users listed');
  } catch (error) {
    next(error);
  }
};

const usersGetById = async (req, res, next) => {
  try {
    const idParam = req.params.id ? req.params.id : -1;
    const user = await usersService.getUserById(idParam);
    commonResponse(res, 200, user, 'User listed');
  } catch (error) {
    next(error);
  }
};

const usersPost = async (req, res, next) => {
  try {
    const userData = req.body;
    //validating email and password
    
    if (!userData.email){
      res.status(422).json({
        error: {
          email: 'Email is required'
        }
      })
    }

    if(!userData.password){
      res.status(422).json({
        error:{
          password: 'Password is required'
        }
      })
    }

    const newUserResponse = await usersService.createUser(userData);
    res.status(201).json({
      data: newUserResponse,
      message: 'User created'
    })
  } catch (error) {
    next(error);
  }
};

const usersDelete = async (req, res, next) => {
  try {
    const idParam = req.params.id ? req.params.id : -1;
    const deletedUser = await usersService.deleteUser(idParam);
    commonResponse(res, 200, deletedUser, 'User Deleted');
  } catch (error) {
    next(error);
  }
};

module.exports = {
  usersGet,
  usersGetById,
  usersPost,
  usersDelete
};
