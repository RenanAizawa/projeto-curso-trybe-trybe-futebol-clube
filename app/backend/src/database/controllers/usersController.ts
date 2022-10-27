import { Request, Response } from 'express';
import UserService from '../services/UserService';

export default class UsersController {
  static async getUser(req: Request, res: Response) {
    const { email, password } = req.body;
    try {
      const token = await UserService.getUser(email, password);
      return res.status(200).json({ token });
    } catch (error: any) {
      if (error.status) return res.status(error.status).json({ message: error.message });
      return res.status(500).json({ message: error.message });
    }
  }
}
