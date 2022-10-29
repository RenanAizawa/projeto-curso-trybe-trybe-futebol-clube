import * as dotenv from 'dotenv';
import { NextFunction, Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';
import TokenError401 from '../erros/token.error';

dotenv.config();
const secret: any = process.env.JWT_SECRET;

export const messageTokenError401: any = { message: 'Token must be a valid token' };

export default class TokenValidate {
  static async validate(req: Request, res: Response, next: NextFunction) {
    const { authorization } = req.headers;
    try {
      const verify: any = jwt.decode(authorization as string, secret);
      console.log(verify.data.role, '<<<<<<< verificação do decode do token');

      if (!authorization) throw new TokenError401(messageTokenError401);
      if (!verify) throw new TokenError401(messageTokenError401);
      if (verify.data.role !== 'admin') throw new TokenError401(messageTokenError401);
      return next();
    } catch (error: any) {
      if (error.status) return res.status(error.status).json({ message: error.message });
      return res.status(401).json(messageTokenError401);
    }
  }
}
