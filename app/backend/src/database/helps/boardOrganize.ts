import { efficiencyTotal } from './boardCalculate';

const boardOrganize = (home: [], away: []) => {
  const joinBoard = home.map((teamHome: any) => {
    const findAway: any = away.find((teamAway: any) => teamAway.name === teamHome.name);
    return {
      name: teamHome.name,
      totalPoints: teamHome.totalPoints + findAway.totalPoints,
      totalGames: teamHome.totalGames + findAway.totalGames,
      totalVictories: teamHome.totalVictories + findAway.totalVictories,
      totalDraws: teamHome.totalDraws + findAway.totalDraws,
      totalLosses: teamHome.totalLosses + findAway.totalLosses,
      goalsFavor: teamHome.goalsFavor + findAway.goalsFavor,
      goalsOwn: teamHome.goalsOwn + findAway.goalsOwn,
      goalsBalance: teamHome.goalsBalance + findAway.goalsBalance,
      efficiency: efficiencyTotal(teamHome, findAway),
    };
  });
  return joinBoard;
};

const sortBoard = (home: any, away: any) => {
  const result = boardOrganize(home, away);
  result.sort((a, b) => b.totalPoints - a.totalPoints
  || b.goalsBalance - a.goalsBalance
  || b.goalsFavor - a.goalsFavor
  || b.goalsOwn - a.goalsOwn);
  return result;
};

export default sortBoard;
