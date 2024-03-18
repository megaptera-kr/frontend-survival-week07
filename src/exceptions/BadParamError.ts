class BadParamError extends Error {
  constructor(message = '') {
    super(message);
    Object.setPrototypeOf(this, BadParamError.prototype);
  }
}

export default BadParamError;
