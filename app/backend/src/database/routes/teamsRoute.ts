import * as express from 'express';
import TeamsController from '../controllers/teamsController';
// import TeamsService from '../services/TeamsService';

const teamsRoute = express.Router();
// const service = new TeamsService();
// const controller = new TeamsController();

teamsRoute.get('/', TeamsController.getAll);
teamsRoute.get('/:id', TeamsController.findById);

export default teamsRoute;
