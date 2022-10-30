import * as express from 'express';
import LeaderBoardControler from '../controllers/leaderBoard.controller';

const boardRoute = express.Router();

boardRoute.get('/home', LeaderBoardControler.allHome);
boardRoute.get('/away', LeaderBoardControler.allAway);
boardRoute.get('/', LeaderBoardControler.getAllBoard);

export default boardRoute;
