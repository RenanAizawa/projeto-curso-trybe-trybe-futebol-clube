import { NextFunction, Request, Response } from 'express';
import MatchesError404 from '../erros/matches.error404';
import MatchesError422 from '../erros/matches.error422';
import Teams from '../models/Teams';

export default class MatchesValidate {
  static async validate(req: Request, res: Response, next: NextFunction) {
    const { homeTeam, awayTeam } = req.body;
    try {
      if (homeTeam === awayTeam) {
        throw new MatchesError422('It is not possible to create a match with two equal teams');
      }
      const verify1 = await Teams.findOne({ where: { id: Number(homeTeam) } });
      const verify2 = await Teams.findOne({ where: { id: Number(awayTeam) } });
      if (!verify1 || !verify2) throw new MatchesError404('There is no team with such id!');
      return next();
    } catch (error: any) {
      return res.status(error.status).json({ message: error.message });
    }
  }
}
