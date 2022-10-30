export const homeTotalPointSum = (acc: number, curr: any) => {
  if (curr.homeTeamGoals > curr.awayTeamGoals) return acc + 3;
  if (curr.homeTeamGoals < curr.awayTeamGoals) return acc;
  return acc + 1;
};

export const awayTotalPointSum = (acc: number, curr: any) => {
  if (curr.awayTeamGoals > curr.homeTeamGoals) return acc + 3;
  if (curr.awayTeamGoals < curr.homeTeamGoals) return acc;
  return acc + 1;
};

export const homeVictories = (acc: number, curr: any) => {
  if (curr.homeTeamGoals > curr.awayTeamGoals) return acc + 1;
  return acc;
};

export const awayVictories = (acc: number, curr: any) => {
  if (curr.awayTeamGoals > curr.homeTeamGoals) return acc + 1;
  return acc;
};

export const drawsMatches = (acc: number, curr: any) => {
  if (curr.awayTeamGoals === curr.homeTeamGoals) return acc + 1;
  return acc;
};

export const homeLost = (acc: number, curr: any) => {
  if (curr.awayTeamGoals > curr.homeTeamGoals) return acc + 1;
  return acc;
};

export const awayLost = (acc: number, curr: any) => {
  if (curr.homeTeamGoals > curr.awayTeamGoals) return acc + 1;
  return acc;
};

export const homeGoalsFavor = (acc: number, curr: any) => acc + curr.homeTeamGoals;

export const awayGoalsFavor = (acc: number, curr: any) => acc + curr.awayTeamGoals;

export const homeGoalsOwn = (acc: number, curr: any) => acc + curr.awayTeamGoals;

export const awayGoalsOwn = (acc: number, curr: any) => acc + curr.homeTeamGoals;

export const homeGoalsBalance = (acc: number, curr: any) => acc
+ (curr.homeTeamGoals - curr.awayTeamGoals);

export const awayGoalsBalance = (acc: number, curr: any) => acc
+ (curr.awayTeamGoals - curr.homeTeamGoals);

export const efficiencyHome = (teamHome: any) => {
  const P = teamHome.reduce(homeTotalPointSum, 0);
  const J = teamHome.length;
  const porc = (P / (J * 3)) * 100;
  return porc.toFixed(2);
};

export const efficiencyAway = (teamAway: any) => {
  const P = teamAway.reduce(awayTotalPointSum, 0);
  const J = teamAway.length;
  const porc = (P / (J * 3)) * 100;
  return porc.toFixed(2);
};

export const efficiencyTotal = (home: any, away: any) => {
  const P = home.totalPoints + away.totalPoints;
  const J = home.totalGames + away.totalGames;
  const porc = (P / (J * 3)) * 100;
  return porc.toFixed(2);
};
