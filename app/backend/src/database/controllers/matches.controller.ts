import { Request, Response } from 'express';
import MatchesService from '../services/Matches.service';

export default class MatchesController {
  static async allMatches(req: Request, res: Response) {
    const { inProgress } = req.query;
    try {
      if (inProgress) {
        const matches = await MatchesService.matchesinProgress(inProgress === 'true');
        return res.status(200).json(matches);
      }
      const allMatches = await MatchesService.getAll();
      return res.status(200).json(allMatches);
    } catch (error: any) {
      return res.status(500).json({ message: error.message });
    }
  }
}
