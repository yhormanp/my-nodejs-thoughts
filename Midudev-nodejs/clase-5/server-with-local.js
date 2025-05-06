import { createApp } from './app.js';
import { MovieModel } from './Models/local-file-system/movie.js';

createApp({ movieModel: MovieModel });
