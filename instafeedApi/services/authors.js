const { Authors } = require('../utils/schemas/authors');

class AuthorsService {
  async getAuthors() {
    const results = await Authors.find();
    return results;
  }

  async getAuthorById(id) {
    const results = await Authors.find({ _id: id });
    return results || [];
  }

  async getAuthorByName(name) {
    const results = await Authors.find({ name: name.toString().trim() });
    return results || [];
  }

  async getAuthorByArticle ( articleId) {
      const results = await Authors.find({articles: articleId});
      return results || [];
  }

  async createAuthor(author) {
    author.name = author.name.trim();
    const newAuthor = new Authors(author);
    const response = await newAuthor.save();
    return response || [];
  }
  async updateAuthor(id, author) {
    const response = await Authors.findByIdAndUpdate({ _id: id }, author, {
      new: true,
    });
    return response || [];
  }

  async deleteAuthor(id) {
    await Authors.findByIdAndDelete(id);
    return id || [];
  }

  async addArticlesInAuthor(authorId, newElement) {
    return await Authors.updateOne(
      {
        _id: authorId,
      },
      {
        $addToSet: {
          articles: {
            $each: newElement,
          },
        },
        new: true,
      }
    );
  }

  async removeArticlesInAuthor(authorId, existentElements) {
    return await Authors.updateMany(
      {
        _id: authorId,
      },
      {
        $pull: {
          articles: {
            $in: existentElements
            // $in: [existentElements],
          },
        },
      }
    );
  }
}

module.exports = AuthorsService;
