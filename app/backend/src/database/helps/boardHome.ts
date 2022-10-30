import {
  drawsMatches,
  efficiencyHome,
  homeGoalsBalance,
  homeGoalsFavor,
  homeGoalsOwn,
  homeLost,
  homeTotalPointSum,
  homeVictories,
} from './boardCalculate';

const boardHome = (board: []) => {
  const result = board.map((time: any) => ({
    name: time.teamName,
    totalPoints: time.teamHome.reduce(homeTotalPointSum, 0),
    totalGames: time.teamHome.length,
    totalVictories: time.teamHome.reduce(homeVictories, 0),
    totalDraws: time.teamHome.reduce(drawsMatches, 0),
    totalLosses: time.teamHome.reduce(homeLost, 0),
    goalsFavor: time.teamHome.reduce(homeGoalsFavor, 0),
    goalsOwn: time.teamHome.reduce(homeGoalsOwn, 0),
    goalsBalance: time.teamHome.reduce(homeGoalsBalance, 0),
    efficiency: efficiencyHome(time.teamHome),
  }));
  result.sort((a, b) => b.totalPoints - a.totalPoints
  || b.goalsBalance - a.goalsBalance
  || b.goalsFavor - a.goalsFavor
  || b.goalsOwn - a.goalsOwn);

  return result;
};

export default boardHome;
