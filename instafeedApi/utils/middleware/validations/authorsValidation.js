/* eslint-disable no-undef */
const Joi = require('joi');
const { author_name_validation } = require('./articlesValidation');

exports.authors_validation = Joi.object({
  name: Joi.string().min(3).max(255).required(),
  articles: Joi.array().items(Joi.string()),
});

exports.authors_name_validation = Joi.string().min(3).max(255).required();

exports.authors_articlesList_validation = Joi.array().items(Joi.string());

exports.authors_properties_validation = (objReceived, callback) => {
  let listofErrors = [];
  let response = null;

  for (let property in objReceived) {
    switch (property) {
      case 'name':
        response = author_name_validation.validate(objReceived[property]);
        break;

      case 'articles':
        response = this.authors_articlesList_validation.validate(
          objReceived[property]
        );
        break;
    }

    if (reponse.error) {
      listofErrors.push({
        status: 'error',
        message: response.error,
      });
    }

    if (listofErrors.length > 0) {
      callback(listofErrors, false);
    } else {
      callback(null, true);
    }
  }
};
