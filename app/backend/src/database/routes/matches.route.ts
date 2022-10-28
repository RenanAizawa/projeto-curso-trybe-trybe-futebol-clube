import * as express from 'express';
import MatchesController from '../controllers/matches.controller';

const matchesRoute = express.Router();

matchesRoute.get('/', MatchesController.allMatches);
// matchesRoute.get('/?', MatchesController.matchesinProgress);

export default matchesRoute;
