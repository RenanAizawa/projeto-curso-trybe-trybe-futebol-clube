import { Request, Response } from 'express';
import TeamsService from '../services/TeamsService';

export default class TeamsController {
  static async getAll(req: Request, res: Response) {
    console.log('entrei no getAll do controler');
    try {
      const data = await TeamsService.getAll();
      return res.status(200).json(data);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }

  static async findById(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const data = await TeamsService.findById(Number(id));
      return res.status(200).json(data);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }
}
