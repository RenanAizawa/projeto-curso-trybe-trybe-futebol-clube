import * as bcrypt from 'bcryptjs';
import * as dotenv from 'dotenv';
import * as jwt from 'jsonwebtoken';
import EmailAndPasswordInvalid from '../erros/emailAndPasswordInvalid.error';
import UserEmailAndPasswordNotExist from '../erros/userEmailAndPasswordNotExist.error';
import UserNotFound from '../erros/userNotFound.error';
import { emailAndPasswordIsValid, existEmailAndPassword } from '../helps/login.helper';
import Users from '../models/Users';

dotenv.config();
const secret: any = process.env.JWT_SECRET;
const invalidEmailAndPassword = 'Incorrect email or password';
export default class UserService {
  static async getUser(email: string, password: string) {
    const data:any = await Users.findOne({ where: { email } });
    if (!data) throw new UserNotFound(invalidEmailAndPassword);
    const verify = bcrypt.compareSync(password, data.password);
    if (!verify) throw new UserNotFound(invalidEmailAndPassword);
    const token = jwt.sign({ data }, secret);
    return token;
  }

  static validateLogin(email: string, password: string) {
    const verify1 = existEmailAndPassword(email, password);
    if (!verify1) throw new UserEmailAndPasswordNotExist('All fields must be filled');
    const verify2 = emailAndPasswordIsValid(email, password);
    if (!verify2) throw new EmailAndPasswordInvalid(invalidEmailAndPassword);
  }
}
