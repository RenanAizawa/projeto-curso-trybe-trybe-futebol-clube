import * as express from 'express';
import UsersController from '../controllers/usersController';

const usersRoute = express.Router();

usersRoute.post('/', UsersController.getUser);

export default usersRoute;
