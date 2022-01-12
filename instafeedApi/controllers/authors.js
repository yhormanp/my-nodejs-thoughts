const AuthorsService = require('../services/authors');
const {
  authors_validation,
  authors_properties_validation,
} = require('../utils/middleware/validations/authorsValidation');
const { commonResponse } = require('../utils/utils');

const authorsService = new AuthorsService();

const authorsGet = async (req, res, next) => {
  try {
    const authors = await authorsService.getAuthors();
    commonResponse(res, 200, authors, 'Authors listed');
  } catch (error) {
    next(error);
  }
};

const authorsGetid = async (req, res, next) => {
  try {
    const id = req.params.id ? req.params.id : -1;
    const authors = await authorsService.getAuthorById(id);

    commonResponse(res, 200, authors, 'Authors listed');
  } catch (error) {
    next(error);
  }
};

const authorsGetByName = async (authorName) => {
  const authorData = await authorsService.getAuthorByName(authorName);
  if (authorData.length > 0) {
    return {
      data: authorData[0],
      message: 'author found',
    };
  } else {
    return {
      data: null,
      message: 'Author was not found',
    };
  }
};

const authorsPost = async (req, res, next) => {
  try {
    const authorData = req.body;
    const validationResponse = authors_validation.validate(authorData);
    if (validationResponse.error) {
      res.status(404).send(validationResponse.error);
    } else {
      const response = await validateAndCreateAuthor(authorData);
      //   await authorsService.createAuthor(authorData);
      res.status(201).json({
        data: response.data,
        message: response.message,
      });
    }
  } catch (error) {
    next(error);
  }
};

const authorsPatchId = async (req, res, next) => {
  try {
    const idParam = req.params.id ? req.params.id : -1;
    const authorData = req.body;
    authors_properties_validation(authorData, async (error, results) => {
      if (error && !results) {
        res.status(404).send(error);
      } else {
        const updateAuthor = await authorsService.updateAuthor(
          idParam,
          authorData
        );
        commonResponse(res, 200, updateAuthor, 'Author Updated');
      }
    });
  } catch (error) {
    next(error);
  }
};

const authorsPut = async (req, res, next) => {
  try {
    const idParam = req.params.id ? req.params.id : -1;
    const authorData = req.body;

    const validationResponse = authors_validation.validate(authorData);
    if (validationResponse.error) {
      res.status(404).send(validationResponse.error);
    } else {
      const updateAuthor = await authorsService.updateAuthor(
        idParam,
        authorData
      );
      commonResponse(res, 200, updateAuthor, 'Author Updated');
    }
  } catch (error) {
    next(error);
  }
};

const authorsDelete = async (req, res, next) => {
  try {
    const idParam = req.params.id ? req.params.id : -1;
    const deletedAuthor = await authorsService.deleteAuthor(idParam);
    commonResponse(res, 200, deletedAuthor, 'Author Deleted');
  } catch (error) {
    next(error);
  }
};



// const validateDataAndSaveAuthor= async( authorData) => {
//     const validationResponse = authors_validation.validate(authorData);
//     if (validationResponse.error) {
//       return {
//           data: null,
//           message: validationResponse.error
//       }
//     } else {
//       const authorCreated = await authorsService.createAuthor(authorData);
//       return {
//           data: authorCreated,
//           message: "Author created"
//       }

//     }
// }

const validateAndCreateAuthor = async (author) => {
  //validate if the author already exist
  const validatingAuthor = await authorsGetByName(author.name.trim());
  if (validatingAuthor.data) {
    // then the author already exists, return just the Id
    return {
      success: false,
      data: validatingAuthor.data,
      message: 'Author already exists',
    };
  } else {
    // a new author must be created
    const authorCreated = await authorsService.createAuthor(author);
    return {
      success: true,
      data: authorCreated,
      message: 'Author created',
    };
  }
};

const addArticlesByAuthor = async (author, elementToBeAdded) => {
  return await authorsService.addArticlesInAuthor(author, elementToBeAdded);
};

const removeArticlesFromAuthor = async (articleIdToRemove) => {
  const authorData = await authorsService.getAuthorByArticle(articleIdToRemove);
  if (authorData.length > 0) {
    // found the author related to that article
    return await authorsService.removeArticlesInAuthor(
      authorData[0].id,
      articleIdToRemove
    );
  } else {
    return {
      data: null,
      message: 'Author was not found',
    };
  }
};

module.exports = {
  authorsGet,
  authorsGetid,
  authorsGetByName,
  authorsPost,
  authorsPatchId,
  authorsPut,
  authorsDelete,
  createAuthor: validateAndCreateAuthor,
  addArticlesByAuthor,
  removeArticlesFromAuthor,
};
