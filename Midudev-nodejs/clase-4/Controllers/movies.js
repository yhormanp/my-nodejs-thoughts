import { MovieModel } from '../Models/local-file-system/movie.js';
import { validateMovie, validatePartialMovie } from '../schemas/moviesSchema.js'


export class MovieController {
  static async getAll(req, res) {
    res.header('Access-control-Allow-Origin', '*');
    const { genre } = req.query;
    const movies = await MovieModel.getAll({ genre });
    res.json(movies);
  }

  static async getId(req, res) {
    const { id } = req.params;
    const movie = await MovieModel.getById({ id });
    if (movie) return res.json(movie);

    res.status(404).json({ message: 'Movie not found' });
  }

  static async create(req, res) {
    const result = validateMovie(req.body);
    if (result.error) {
      // 422 unprocessed entity
      res.status(422).json({ error: JSON.parse(result.error.message) });
    }

    const newMovie = await MovieModel.create({ input: result.data });

    res.status(201).json(newMovie); // se suele devolver el objeto creado para actualizar la caché del cliente
  }

  static async delete(req, res) {
    const { id } = req.params;

    const result = await MovieModel.delete({ id });

    if (result === false) {
      return res.status(404).json({ message: 'Movie not found' });
    }

    return res.json({ message: 'Movie deleted' });
  }

  static async update(req, res) {
    const result = validatePartialMovie(req.body);

    if (!result.success) {
      res.status(400).json({ error: JSON.parse(result.error.message) });
    }

    const { id } = req.params;
    const updatedMovie = await MovieModel.update({ id, input: result.data });

    return res.json(updatedMovie);
  }
}
