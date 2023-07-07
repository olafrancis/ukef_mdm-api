export class InformaticaException extends Error {
  constructor(message: string, public readonly innerError?: Error) {
    super(message);
    this.name = this.constructor.name;
  }
}
