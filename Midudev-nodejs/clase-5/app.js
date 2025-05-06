import express, { json } from 'express'; // require --> commonJs
// import movies from './movies.json' assert { type: 'json'}

//como leer un json en ESMOdules
// import fs from 'node:fs';
// const movies = JSON.parse(fs.readFileSync('./movies.json', 'utf-8'));

// como leer un json en ESModules, recomendado
// import { createRequire } from 'node:module';
// const require =  createRequire(import.meta.url);
// const movies = require('./movies.json')
//--****

// import { moviesRouter } from './routes/movies.js';
import { createMovieRouter } from './routes/movies.js';
import { corsMiddleware } from './middlewares/cors.js';

// modelo que utilizará el controller para acceder al backend
// import { MovieModel } from './Models/mysql/movie.js';

export const createApp = ({ movieModel }) => {
  const app = express();
  app.use(json());
  app.use(corsMiddleware());
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
  app.use('/movies', createMovieRouter({ movieModel }));

  app.listen(PORT, () => {
    console.log('the server has started in the port: ', PORT);
  });
};
