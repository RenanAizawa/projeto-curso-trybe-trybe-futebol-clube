import * as express from 'express';
import UsersController from '../controllers/usersController';
import LoginValidate from '../midllewares/loginValidate';

const usersRoute = express.Router();

usersRoute.post(
  '/',
  LoginValidate.validateLogin,
  UsersController.getUser,
);
usersRoute.get('/validate', LoginValidate.tokenVerify);

export default usersRoute;
