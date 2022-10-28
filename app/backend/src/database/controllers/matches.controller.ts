import { Request, Response } from 'express';
import MatchesService from '../services/Matches.service';

export default class MatchesController {
  static async allMatches(req: Request, res: Response) {
    try {
      const allMatches = await MatchesService.getAll();
      return res.status(200).json(allMatches);
    } catch (error: any) {
      return res.status(500).json({ message: error.message });
    }
  }
}
