import Teams from '../models/Teams';
import TeamError from '../erros/teams.error';

export default class TeamsService {
  static async getAll() {
    console.log('entrei no getAll do Service');

    const result = await Teams.findAll();
    if (!result) throw new TeamError('Erro na busca de teams');
    return result;
  }

  static async findById(id: number) {
    const result = await Teams.findOne({ where: { id } });
    if (!result) throw new TeamError('Nenhum time encontrado com id fornecido');
    return result;
  }
}
