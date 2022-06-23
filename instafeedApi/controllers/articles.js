const ArticlesService = require('../services/articles');
// const AuthorsService = require('../services/authors');
const {
  articles_validation,
  articles_properties_validation,
} = require('../utils/middleware/validations/articlesValidation');
const { createAuthor, addArticlesByAuthor, removeArticlesFromAuthor } = require('./authors');

const articlesService = new ArticlesService();

const articlesGet = async (req, res, next) => {
  // pending to connect to the services
  try {
    const articles = await articlesService.getArticles();
    res.status(200).json({
      data: articles,
      message: 'articles listed',
    });
  } catch (error) {
    next(error);
  }
};

const articlesGetId = async (req, res, next) => {
  const idParam = req.params.id ? req.params.id : -1;
  try {
    const articles = await articlesService.getArticle(idParam);
    res.status(200).json({
      data: articles,
      message: 'articles listed',
    });
  } catch (error) {
    next(error);
  }
};

const articlesPost = async (req, res, next) => {
  try {
    const article = req.body;
    const validationResponse = articles_validation.validate(article);
    if (validationResponse.error) {
      res.status(400).send(validationResponse.error);
    } else {

      // validate and create the author
      const {data :{ id: authorId } } = await createAuthor({name: article.author});

      article.author = authorId;
      const articleNew = await articlesService.createArticle(article);

      //upate the articles in the author
      await addArticlesByAuthor (authorId, [articleNew.id])

      res.status(201).json({
        data: articleNew,
        message: 'article created',
      });
    }
  } catch (error) {
    next(error);
  }
};

const articlesPatchId = async (req, res, next) => {
  const idParam = req.params.id ? req.params.id : -1;
  const articleData = req.body;
  try {
    articles_properties_validation(articleData, async (error, results) => {
      if (error && !results) {
        res.status(400).send(error);
      } else {
        const updatedArticle = await articlesService.updateArticle(
          idParam,
          articleData
        );
        res.status(200).json({
          data: updatedArticle,
          message: 'article updated',
        });
      }
    });
  } catch (error) {
    next(error);
  }
};

const articlesPut = async (req, res, next) => {
  const idParam = req.params.id ? req.params.id : -1;
  const articleData = req.body;
  try {
    const validationResponse = articles_validation.validate(articleData);
    if( validationResponse.error){
      res.status(400).send(validationResponse.error);
    } else {
      const updatedArticle = await articlesService.updateArticle(
        idParam,
        articleData
      );
      res.status(200).json({
        data: updatedArticle,
        message: 'article updated',
      });
    }

  } catch (error) {
    next(error);
  }
};

const articlesDelete = async (req, res, next) => {
  const idParam = req.params.id ? req.params.id : -1;
  try {
    const deletedArticle = await articlesService.deleteArticle(idParam);

    //after the article was deleted, remove it from the author's article
    await removeArticlesFromAuthor(deletedArticle);

    res.status(200).json({
      data: deletedArticle,
      message: 'article deleted',
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  articlesGet,
  articlesGetId,
  articlesPost,
  articlesPatchId,
  articlesPut,
  articlesDelete,
};
