import { ITeams } from './ITeams';

export interface ITeamsService {
  getAll(): Promise<ITeams[]>
  findById(id: number): Promise<ITeams>
}
