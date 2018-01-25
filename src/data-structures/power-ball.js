/**
 * Data structure for power balls
 */

const BaseBall = require('./base-ball')

class PowerBall extends BaseBall {
  // Set ball properties
  get minNumber() {
    return 1
  }

  get maxNumber() {
    return 19
  }

  get name() {
    return 'PowerBall'
  }
}

module.exports = PowerBall
