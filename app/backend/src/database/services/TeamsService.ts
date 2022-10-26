import Teams from '../models/Teams';

export default class TeamsService {
  static async getAll() {
    console.log('entrei no getAll do Service');

    const result = await Teams.findAll();
    if (!result) throw new Error('Erro na busca de teams');
    return result;
  }

  static async findById(id: number) {
    const result = await Teams.findOne({ where: { id } });
    if (!result) throw new Error('Nenhum time encontrado com id fornecido');
    return result;
  }
}
