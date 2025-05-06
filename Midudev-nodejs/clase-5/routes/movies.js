import { Router } from 'express';
import { MovieController } from '../Controllers/movies.js';

export const createMovieRouter = ({ movieModel }) => {
  const moviesRouter = Router();

  const movieController = new MovieController({ movieModel });

  moviesRouter.get('/', movieController.getAll);
  moviesRouter.get('/:id', movieController.getId);
  moviesRouter.post('/', movieController.create);
  moviesRouter.delete('/:id', movieController.delete);
  moviesRouter.patch('/:id', movieController.update);

  return moviesRouter;
};
