export default class MatchesError404 extends Error {
  public status: number;
  constructor(message: string) {
    super(message);
    this.status = 404;
  }
}
