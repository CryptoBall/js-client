/**
 * Data structure for normal balls
 */

const BaseBall = require('./base-ball')

class NormalBall extends BaseBall {
  // Set ball properties
  get minNumber() {
    return 1
  }

  get maxNumber() {
    return 29
  }

  get name() {
    return 'NormalBall'
  }
}

module.exports = NormalBall
