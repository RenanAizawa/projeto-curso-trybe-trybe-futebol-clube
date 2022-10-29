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

  static async createMatch(req: Request, res: Response) {
    const { homeTeam,
      awayTeam,
      homeTeamGoals,
      awayTeamGoals } = req.body;

    try {
      const create = await MatchesService.createMatch(
        homeTeam,
        awayTeam,
        homeTeamGoals,
        awayTeamGoals,
      );
      return res.status(201).json(create);
    } catch (error: any) {
      return res.status(401).json({ message: error.message });
    }
  }

  static async updateProgress(req: Request, res: Response) {
    const { id } = req.params;

    try {
      const updated = await MatchesService.updateMatchProgress(Number(id));
      if (updated) return res.status(200).json({ message: 'Finished' });
      return res.end();
    } catch (error: any) {
      return res.status(500).json({ message: error.message });
    }
  }
}
