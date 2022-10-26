import { Request, Response } from 'express';
import TeamsService from '../services/TeamsService';

export default class TeamsController {
  static async getAll(req: Request, res: Response) {
    try {
      const data = await TeamsService.getAll();
      return res.status(200).json(data);
    } catch (error: any) {
      if (error.status) return res.status(error.status).json({ message: error.message });
      res.status(500).json({ message: error.message });
    }
  }

  static async findById(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const data = await TeamsService.findById(Number(id));
      return res.status(200).json(data);
    } catch (error: any) {
      if (error.status) return res.status(error.status).json({ message: error.message });
      res.status(500).json({ message: error.message });
    }
  }
}
