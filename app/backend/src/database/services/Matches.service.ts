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
}
