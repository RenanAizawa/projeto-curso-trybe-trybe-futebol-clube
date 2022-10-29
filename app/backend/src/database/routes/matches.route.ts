import * as express from 'express';
import MatchesController from '../controllers/matches.controller';
import MatchesValidate from '../midllewares/matchesValidate';
import TokenValidate from '../midllewares/tokenValidate';

const matchesRoute = express.Router();

matchesRoute.get('/', MatchesController.allMatches);
matchesRoute.post(
  '/',
  TokenValidate.validate,
  MatchesValidate.validate,
  MatchesController.createMatch,
);
matchesRoute.patch('/:id/finish', MatchesController.updateProgress);
matchesRoute.patch('/:id', TokenValidate.validate, MatchesController.updatePlacar);

export default matchesRoute;
