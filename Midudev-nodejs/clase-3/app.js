const express = require('express'); // require --> commonJs
const crypto = require('node:crypto');
const movies = require('./movies.json');

const cors = require('cors');
const {
  validateMovie,
  validatePartialMovie,
} = require('./schemas/moviesSchema');

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: (origin, callback) => {
      const ACCEPTED_ORIGINS = [
        'http://localhost:8080',
        'http://localhost:1234',
        'https://movies.com',
        'https://midu.dev',
      ];

      if (ACCEPTED_ORIGINS.includes(origin)) {
        return callback(null, true);
      }

      if (!origin) {
        return callback(null, true);
      }

      return callback(new Error('Not allowed by CORS'));
    },
  })
);
app.disable('x-powered-by');

// métodos normales: GET/HEAD/POST
// métodos complejos: PUT/PATCH/DELETE

// CORS PRE-Flight
// OPTIONS

const PORT = process.env.PORT ?? 1234;

app.get('/', (req, res) => {
  res.json({ message: 'hola mundo' });
});

// todos los recursos que sean MOVIES, se identifican con /movies
app.get('/movies', (req, res) => {
  res.header('Access-control-Allow-Origin', '*');
  const { genre } = req.query;
  if (genre) {
    const filteredMovies = movies.filter((movie) =>
      movie.genre.some((g) => g.toLowerCase() === genre.toLowerCase())
    );
    return res.json(filteredMovies);
  }
  res.json(movies);
});

app.get('/movies/:id', (req, res) => {
  const { id } = req.params;
  const movie = movies.find((movie) => movie.id === id);
  if (movie) return res.json(movie);

  res.status(404).json({ message: 'Movie not found' });
});

app.get('/movies/:id', (req, res) => {
  const { id } = req.params;
  const movie = movies.find((movie) => movie.id === id);
  if (movie) return res.json(movie);

  res.status(404).json({ message: 'Movie not found' });
});

app.post('/movies', (req, res) => {
  // const { title, genre, year, director, duration, rate, poster } = req.body;

  // if (!title || !genre || !year || !director || !duration) {
  //   return res.status(400).json({ message: 'Missing required fields' });
  // }

  const result = validateMovie(req.body);
  if (result.error) {
    // 422 unprocessed entity
    res.status(422).json({ error: JSON.parse(result.error.message) });
  }

  const newMovie = {
    id: crypto.randomUUID(), // uuId V4
    ...result.data,
    // title,
    // genre,
    // year,
    // director,
    // duration,
    // rate: rate ?? 0,
    // poster,
  };
  movies.push(newMovie);

  res.status(201).json(newMovie); // se suele devolver el objeto creado para actualizar la caché del cliente
});

app.patch('/movies/:id', (req, res) => {
  const result = validatePartialMovie(req.body);

  if (!result.success) {
    res.status(400).json({ error: JSON.parse(result.error.message) });
  }

  const { id } = req.params;
  const movieIndex = movies.findIndex((movie) => movie.id === id);

  console.log('test', id, movieIndex);
  if (movieIndex === -1)
    return res.status(404).json({ message: 'Movie not found' });

  const updateMovie = {
    ...movies[movieIndex],
    ...result.data,
  };

  movies[movieIndex] = updateMovie;

  return res.json(updateMovie);
});

app.delete('/movies/:id', (req, res) => {
  const { id } = req.params;
  const movieIndex = movies.findIndex((movie) => movie.id === id);

  if (movieIndex === -1) {
    return res.status(404).json({ message: 'Movie not found' });
  }

  movies.splice(movieIndex, 1);

  return res.json({ message: 'Movie deleted' });
});

app.listen(PORT, () => {
  console.log('the server has started in the port: ', PORT);
});
