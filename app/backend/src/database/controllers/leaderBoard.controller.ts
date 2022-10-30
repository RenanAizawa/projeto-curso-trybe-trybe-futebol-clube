import { Request, Response } from 'express';
import boardAway from '../helps/boardAway';
import boardHome from '../helps/boardHome';
import sortBoard from '../helps/boardOrganize';
import LeaderBoard from '../services/LeaderBoard.service';

export default class LeaderBoardControler {
  static async allHome(req: Request, res: Response) {
    try {
      const board = await LeaderBoard.getAllHome();
      const organize = boardHome(board as []);
      return res.status(200).json(organize);
    } catch (error: any) {
      return res.status(500).json({ message: error.message });
    }
  }

  static async allAway(req: Request, res: Response) {
    try {
      const board = await LeaderBoard.getAllAway();
      const organize = boardAway(board as []);
      return res.status(200).json(organize);
    } catch (error: any) {
      return res.status(500).json({ message: error.message });
    }
  }

  static async getAllBoard(req: Request, res: Response) {
    try {
      const homeCru = await LeaderBoard.getAllHome();
      const awayCru = await LeaderBoard.getAllAway();
      const home = boardHome(homeCru as []);
      const away = boardAway(awayCru as []);
      //   console.log(home[0], '<<<<<: Board home');
      //   console.log(away[0], '<<<<<: Board away');
      const allBoard = sortBoard(home, away);
      return res.status(200).json(allBoard);
    } catch (error: any) {
      return res.status(500).json({ message: error.message });
    }
  }
}
