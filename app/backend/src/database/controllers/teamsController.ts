import { Request, Response } from 'express';
// import { ITeamsService } from '../interfaces/ITeamsService';
import TeamsService from '../services/TeamsService';
// import Teams from '../models/Teams';

export default class TeamsController {
  public teamsService: TeamsService;
  constructor() {
    this.teamsService = new TeamsService();
    // console.log('CONTROLER:  ', teamsService);
  }

  static async getAll(req: Request, res: Response) {
    console.log('entrei no getAll do controler');
    try {
      const data = await TeamsService.getAll();
      return res.status(201).json(data);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }

//   async findById(req: Request, res: Response) {
//     const { id } = req.params;
//     try {
//       const data = await this.teamsService.findById(Number(id));
//       return res.status(201).json(data);
//     } catch (error: any) {
//       res.status(500).json({ message: error.message });
//     }
//   }
}
