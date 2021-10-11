export default class ErrorRepository {
  constructor() {
    this.errorCode = new Map();
    this.errorCode.set(404, 'page not found');
    this.errorCode.set(403, 'page forbidden');
    this.errorCode.set(400, 'wrong request');
  }

  translate(code) {
    if (!this.errorCode.has(code)) {
      return 'Unknown error';
    }
    return this.errorCode.get(code);
  }
}
