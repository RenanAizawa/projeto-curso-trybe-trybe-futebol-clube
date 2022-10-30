import Matches from '../models/Matches';
import Teams from '../models/Teams';

export default class LeaderBoardService {
  static async getAllHome() {
    const board = await Teams.findAll({
      attributes: ['teamName'],
      include: [
        {
          model: Matches,
          as: 'teamHome',
          attributes: ['homeTeamGoals', 'awayTeamGoals'],
          where: { inProgress: false },
        },
      ],
    });
    return board;
  }

  static async getAllAway() {
    const board = await Teams.findAll({
      attributes: ['teamName'],
      include: [
        {
          model: Matches,
          as: 'teamAway',
          attributes: ['homeTeamGoals', 'awayTeamGoals'],
          where: { inProgress: false },
        },
      ],
    });
    return board;
  }
}
