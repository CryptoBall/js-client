/**
 * Base data structure for balls
 */

class BaseBall {
  // Ball properties, to be overridden
  get minNumber() {
    return 0
  }

  get maxNumber() {
    return 0
  }

  get name() {
    return 'BaseBall'
  }

  /**
   * Instantiate and check validity of the number
   *
   * @param {number} number
   */
  constructor(number) {
    if (typeof number !== 'number' || number !== parseInt(number, 10)) {
      throw new Error(`${this.name} must be initiated with integer`)
    }

    if (number < this.minNumber || this.maxNumber < number) {
      throw new Error(
        `${this.name} must be within range [ ${this.minNumber}, ${
          this.maxNumber
        } ]`
      )
    }

    this.number = number
  }
}

module.exports = BaseBall
