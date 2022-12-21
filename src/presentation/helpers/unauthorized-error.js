module.exports = class UanauthorizedError extends Error {
  constructor (paramName) {
    super('Unauthorized')
    this.name = 'UanauthorizedError'
  }
}
