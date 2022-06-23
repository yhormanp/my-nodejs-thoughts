const { Articles } = require('../utils/schemas/articles');

class ArticlesService {
  constructor() {
    this.collection = 'articles';
  }

  async getArticles() {
    const results = await Articles.find();
    return results;
  }

  async getArticle(id) {
    let filter = {};
    if (id !== undefined) {
      filter._id = id;
    }

    console.log('articles GET requested');
    const results = await Articles.find(filter);
    console.log('articles GET returned', results);
    return results;
  }

  async createArticle(article) {
      console.log("article to be created", article)
    const newArticle = new Articles(article);
    const response = await newArticle.save();
    return response || [];
  }

  async updateArticle(id, article) {
    const response = await Articles.findByIdAndUpdate({ _id: id }, article, {
      new: true,
    });

    return response || [];
  }

  async deleteArticle(id) {
    await Articles.findByIdAndDelete(id);
    return id || [];
  }
}

module.exports = ArticlesService;
