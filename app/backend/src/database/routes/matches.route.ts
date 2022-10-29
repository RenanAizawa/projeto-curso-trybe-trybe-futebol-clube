import * as express from 'express';
import MatchesController from '../controllers/matches.controller';

const matchesRoute = express.Router();

matchesRoute.get('/', MatchesController.allMatches);
matchesRoute.post('/', MatchesController.createMatch);
matchesRoute.patch('/:id/finish', MatchesController.updateProgress);

export default matchesRoute;
