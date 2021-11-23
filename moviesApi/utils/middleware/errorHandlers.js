const { config } = require('../../config/index');
const boom = require('@hapi/boom');

function withErrorStack(err, stack) {
  if (config.dev) {
    return {...err, stack };
  }

  return err;
}

function logError(err, req, res, next) {
  console.log(err);
  next(err);
}

function wrapError(err, req, res, next){
  if(!err.isBoom){
    next(boom.badImplementation(err))
  }

  next(err);

}

function errorHandler(err, req, res, next) {//eslint-disable-line
  const {output : {statusCode, payload}} = err;

  // res.status(err.status || 500);
  res.status(statusCode);
  // res.json(withErrorStack(err.message, err.stack));
  res.json(withErrorStack(payload, err.stack));

}

module.exports = {
  logError,
  errorHandler,
  wrapError
};
