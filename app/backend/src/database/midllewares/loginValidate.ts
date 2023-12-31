import * as dotenv from 'dotenv';
import { NextFunction, Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';
import UserService from '../services/UserService';

dotenv.config();

const secret: any = process.env.JWT_SECRET;

export default class LoginValidate {
  static validateLogin = (req: Request, res: Response, next: NextFunction) => {
    // console.log('passei pelo middleware');

    const { email, password } = req.body;
    try {
      UserService.validateLogin(email, password);
      return next();
    } catch (error: any) {
      return res.status(error.status).json({ message: error.message });
    }
  };

  static tokenVerify = (req: Request, res: Response) => {
    const { authorization } = req.headers;
    // console.log(authorization, '<<<<<<: testando a existencia doa authorization');
    try {
      if (!authorization) throw new Error('Token inexistente');
      const user: any = jwt.decode(authorization, secret);
      if (!user) throw new Error('Token sem usuario');
      return res.status(200).json({ role: user.data.role });
    } catch (error: any) {
      return res.status(401).json({ message: error.message });
    }
  };
}
