// import { ITeamsService } from '../interfaces/ITeamsService';
import Teams from '../models/Teams';

export default class TeamsService {
  // private model: Model;
  // constructor() {
  //   // this.model =  Teams;
  //   // console.log('SERVICE: ', model);
  // }

  static async getAll() {
    console.log('entrei no getAll do Service');

    const result = await Teams.findAll();
    if (!result) throw new Error('Erro na busca de teams');
    return result;
  }

  // async findById(id: number) {
  //   const result = await this.teamsModel.findOne({ where: { id } });
  //   if (!result) throw new Error('Nenhum time encontrado com id fornecido');
  //   return result;
  // }
}
