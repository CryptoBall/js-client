/**
 * Data structure for representing the pack of 6 balls
 *
 * - 5 normal balls, all distinct numbers
 * - 1 crypto ball
 */

const NormalBall = require('./normal-ball')
const PowerBall = require('./power-ball')

class BallPack {
  // Overridable property
  get numNormalBalls() {
    return 5
  }

  /**
   * A factory to create new BallPack from ball numbers
   *
   * @param {Array<number>} normalNumbers
   * @param {number} powerNumber
   */
  static createFromNumbers(normalNumbers, powerNumber) {
    if (!Array.isArray(normalNumbers)) {
      throw new TypeError(`First argument must be an array`)
    }

    return new BallPack(
      normalNumbers.map(number => new NormalBall(number)),
      new PowerBall(powerNumber)
    )
  }

  /**
   * Instantite and check validity of the balls
   *
   * @param {array<NormalBall>} normalBalls
   * @param {PowerBall} powerBall
   */
  constructor(normalBalls, powerBall) {
    if (
      !Array.isArray(normalBalls) ||
      normalBalls.length !== this.numNormalBalls ||
      normalBalls.some(ball => !(ball instanceof NormalBall))
    ) {
      throw new Error(
        `First argument must be an array of ${this.numNormalBalls} NormalBalls`
      )
    }

    if (!checkDistinctBalls(normalBalls)) {
      throw new Error('Every NormalBall in a BallPack must be distinct')
    }

    if (!(powerBall instanceof PowerBall)) {
      throw new TypeError(`Second argument must be a PowerBall`)
    }

    this.normalBalls = normalBalls
    this.powerBall = powerBall
  }
}

/**
 * Helper to check that all the balls in an array are of distinct numbers
 *
 * @param {BaseBall} balls
 */
function checkDistinctBalls(balls) {
  const hashTable = {}
  for (let i = 0; i < balls.length; i++) {
    if (hashTable[balls[i].number]) {
      return false
    }
    hashTable[balls[i].number] = true
  }

  return true
}

module.exports = BallPack
