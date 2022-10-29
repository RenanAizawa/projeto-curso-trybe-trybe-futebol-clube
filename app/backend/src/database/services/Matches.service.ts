import Matches from '../models/Matches';
import Teams from '../models/Teams';

export default class MatchesService {
  static async getAll() {
    const allMatches = await Matches.findAll({ include: [
      { model: Teams, as: 'teamHome', attributes: ['teamName'] },
      { model: Teams, as: 'teamAway', attributes: ['teamName'] },
    ],
    });
    return allMatches;
  }

  static async matchesinProgress(inProgress: boolean) {
    const matches = await Matches.findAll({
      where: { inProgress },
      include: [
        { model: Teams, as: 'teamHome', attributes: ['teamName'] },
        { model: Teams, as: 'teamAway', attributes: ['teamName'] },
      ],
    });
    return matches;
  }

  static async createMatch(
    homeTeam: number,
    awayTeam: number,
    homeTeamGoals: number,
    awayTeamGoals: number,
  ) {
    const create = await Matches.create({
      homeTeam,
      awayTeam,
      homeTeamGoals,
      awayTeamGoals,
      inProgress: true,
    });
    return create as Matches;
  }

  static async updateMatchProgress(id: number) {
    const matche = Matches.update({ inProgress: false }, { where: { id } });
    return matche;
  }

  static async updatePlacarMatch(
    id: number,
    homeTeamGoals: number,
    awayTeamGoals: number,
  ) {
    const placar = Matches.update({ homeTeamGoals, awayTeamGoals }, { where: { id } });
    return placar;
  }
}
