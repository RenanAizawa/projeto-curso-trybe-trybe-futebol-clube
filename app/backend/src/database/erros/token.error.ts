export default class TokenError401 extends Error {
  public status: number;
  constructor(message: string) {
    super(message);
    this.status = 401;
  }
}
