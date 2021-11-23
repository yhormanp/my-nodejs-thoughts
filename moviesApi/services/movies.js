// const { moviesMock } = require('../utils/mocks/movies');
const MongoLib = require('../lib/mongo');

class MoviesService {
  constructor() {
    this.collection = 'movies';
    this.mongoDb = new MongoLib();
  }
  async getMovies({ tags }) {
    const query = tags && { tags: { $in: tags } };

    // const movies = await Promise.resolve(moviesMock);
    const movies = await this.mongoDb.getAll(this.collection, query);

    return movies || [];
  }

  async getMovie({ movieId }) {
    // const movie = await Promise.resolve(moviesMock[0]);
    const movie = await this.mongoDb.get(this.collection, movieId);

    return movie || [];
  }

  async createMovie({ movie }) {
    // const createMovieId = await Promise.resolve(moviesMock[0].id);
    const createMovieId = await this.mongoDb.create(this.collection, movie);

    return createMovieId || [];
  }

  async updateMovie({movieId, movie}= {}) {
    // const updatedMovieId = await Promise.resolve(moviesMock[0].id);
    const updatedMovieId = await this.mongoDb.update(this.collection, movieId, movie)

    return updatedMovieId || [];
  }

  async deleteMovie({movieId}) {
    // const deletedMovieId = await Promise.resolve(moviesMock[0].id);
    const deletedMovieId = await this.mongoDb.delete(this.collection, movieId)

    return deletedMovieId || [];
  }

  // async patchMovie() {
  //   const patchMovieId = await Promise.resolve(moviesMock[0].id);
  //   return patchMovieId || [];
  // }
}

module.exports = MoviesService;
