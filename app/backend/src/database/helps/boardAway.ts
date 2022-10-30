import {
  awayGoalsBalance,
  awayGoalsFavor,
  awayGoalsOwn,
  awayLost,
  awayTotalPointSum,
  awayVictories,
  drawsMatches, efficiencyAway,
} from './boardCalculate';

const boardAway = (board: []) => {
  const result = board.map((time: any) => ({
    name: time.teamName,
    totalPoints: time.teamAway.reduce(awayTotalPointSum, 0),
    totalGames: time.teamAway.length,
    totalVictories: time.teamAway.reduce(awayVictories, 0),
    totalDraws: time.teamAway.reduce(drawsMatches, 0),
    totalLosses: time.teamAway.reduce(awayLost, 0),
    goalsFavor: time.teamAway.reduce(awayGoalsFavor, 0),
    goalsOwn: time.teamAway.reduce(awayGoalsOwn, 0),
    goalsBalance: time.teamAway.reduce(awayGoalsBalance, 0),
    efficiency: efficiencyAway(time.teamAway),
  }));
  result.sort((a, b) => b.totalPoints - a.totalPoints
    || b.goalsBalance - a.goalsBalance
    || b.goalsFavor - a.goalsFavor
    || b.goalsOwn - a.goalsOwn);

  return result;
};

export default boardAway;
