import * as bcrypt from 'bcryptjs';
import * as dotenv from 'dotenv';
import * as jwt from 'jsonwebtoken';
import UserNotFound from '../erros/userNotFound.error';
import UserPasswordNotMatch from '../erros/userPasswordNotMatch.error';
import Users from '../models/Users';

dotenv.config();
const secret: any = process.env.JWT_SECRET;

export default class UserService {
  static async getUser(email: string, password: string) {
    const data:any = await Users.findOne({ where: { email } });
    if (!data) throw new UserNotFound('Usuario Não encontrado');
    const verify = bcrypt.compareSync(password, data.password);
    if (!verify) throw new UserPasswordNotMatch('Password not Macth');
    const token = jwt.sign({ data }, secret);
    return token;
  }
}
