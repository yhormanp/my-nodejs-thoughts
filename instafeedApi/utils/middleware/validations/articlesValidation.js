/* eslint-disable no-undef */
const Joi = require('joi');
exports.articles_validation = Joi.object({
  // id: Joi.string()
  //     .alphanum()
  //     .min(3)
  //     .max(36)
  //     .required(),
  title: Joi.string().min(3).max(255),
  author: Joi.string().min(3).max(100),
  modifiedAt: Joi.date().less('now'),
  //   .alphanum()
  //   .min(3)
  //   .max(255),
  publishedAt: Joi.date().less('now').allow(null).allow(''),
  url: Joi.alternatives().conditional('publishedAt', {
    is: null,
    then: Joi.string().allow(null).allow(''),
    otherwise: Joi.string().required(),
  }),
  keywords: Joi.array().items(Joi.string()).min(1).max(3),
  readMins: Joi.number().integer().min(1).max(20).required(),
  source: Joi.string()
    .case('upper')
    .valid('ARTICLE', 'BLOG', 'TWEET', 'NEWSPAPER')
    .required(),
});

// exports.idSchema = Joi.string()
// .alphanum()
// .min(3)
// .max(36)
// .required();

exports.title_validation = Joi.string().min(3).max(255);

exports.author_name_validation = Joi.string().min(3).max(100);

exports.modifiedAt_validation = Joi.date().less('now');

exports.publishedAt_validation = Joi.date().less('now').allow(null).allow('');

// exports.urlSchema = Joi.alternatives().conditional('publishedAt', {is: null, then: Joi.string()
// .allow(null).allow(''), otherwise: Joi.string().required()});

exports.url_validation = Joi.string().allow(null).allow('');

exports.keywords_validation = Joi.array().items(Joi.string()).min(1).max(3);

exports.readMins_validation = Joi.number().integer().min(1).max(20).required();

exports.source_validation = Joi.string()
  .case('upper')
  .valid('ARTICLE', 'BLOG', 'TWEET', 'NEWSPAPER')
  .required();

exports.articles_properties_validation = (objReceived, callback) => {
  let listOfErrors = [];
  let response = null;

  for (let property in objReceived) {
    switch (property) {
      case 'title':
        response = this.title_validation.validate(objReceived[property]);
        break;

      case 'author':
        response = this.author_name_validation.validate(
          objectReceived[property]
        );
        break;
      case 'modifiedAt':
        response = this.modifiedAt_validation.validate(
          objectReceived[property]
        );
        break;
      case 'PublishedAt':
        response = this.publishedAt_validation.validate(
          objectReceived[property]
        );
        break;
      case 'url':
        response = this.url_validation.validate(objectReceived[property]);
        break;
      case 'keywords':
        response = this.keywords_validation.validate(objectReceived[property]);
        break;
      case 'readMins':
        response = this.readMins_validation.validate(objectReceived[property]);
        break;
      case 'source':
        response = this.source_validation.validate(objectReceived[property]);
        break;
    }

    if (response.error) {
      listOfErrors.push({
        status: 'error',
        message: response.error,
      });
    }
  }

  if (listOfErrors.length > 0) {
    callback(listOfErrors, false);
  } else {
    callback(null, true);
  }
};
