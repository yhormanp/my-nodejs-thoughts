// import { MovieModel } from '../Models/local-file-system/movie.js';
// import { MovieModel } from '../Models/mysql/movie.js';
import {
  validateMovie,
  validatePartialMovie,
} from '../schemas/moviesSchema.js';

export class MovieController {
  constructor({ movieModel }) {
    // se usa para con inyeccion de dependencias decidir que instancia va a ser el movie model,
    //  local-file-system, mysql or mongo
    this.movieModel = movieModel;
  }
  getAll = async (req, res) => {
    res.header('Access-control-Allow-Origin', '*');
    const { genre } = req.query;
    const movies = await this.movieModel.getAll({ genre });
    res.json(movies);
  };

  getId = async (req, res) => {
    const { id } = req.params;
    const movie = await this.movieModel.getById({ id });
    if (movie) return res.json(movie);

    res.status(404).json({ message: 'Movie not found' });
  };

  create = async (req, res) => {
    const result = validateMovie(req.body);
    if (result.error) {
      // 422 unprocessed entity
      res.status(422).json({ error: JSON.parse(result.error.message) });
    }

    const newMovie = await this.movieModel.create({ input: result.data });

    res.status(201).json(newMovie); // se suele devolver el objeto creado para actualizar la caché del cliente
  };

  delete = async (req, res) => {
    const { id } = req.params;

    const result = await this.movieModel.delete({ id });

    if (result === false) {
      return res.status(404).json({ message: 'Movie not found' });
    }

    return res.json({ message: 'Movie deleted' });
  };

  update = async (req, res) => {
    const result = validatePartialMovie(req.body);

    if (!result.success) {
      res.status(400).json({ error: JSON.parse(result.error.message) });
    }

    const { id } = req.params;
    const updatedMovie = await this.movieModel.update({ id, input: result.data });

    return res.json(updatedMovie);
  };
}
