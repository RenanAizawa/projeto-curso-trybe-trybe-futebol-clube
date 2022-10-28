import * as express from 'express';
import MatchesController from '../controllers/matches.controller';

const matchesRoute = express.Router();

matchesRoute.get('/', MatchesController.allMatches);

export default matchesRoute;
