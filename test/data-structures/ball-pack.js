const test = require('ava')

const BallPack = require('../../src/data-structures/ball-pack')
const NormalBall = require('../../src/data-structures/normal-ball')
const PowerBall = require('../../src/data-structures/power-ball')

// Helper function to generate legit ball list
function generateBalls() {
  return {
    normalBalls: [
      new NormalBall(1),
      new NormalBall(2),
      new NormalBall(3),
      new NormalBall(4),
      new NormalBall(5),
    ],
    powerBall: new PowerBall(1),
  }
}

test('returns itself', t => {
  const sample = generateBalls()
  t.true(new BallPack(sample.normalBalls, sample.powerBall) instanceof BallPack)
})

test('supports 5 NormalBalls', t => {
  const sample = generateBalls()
  const ballPack = new BallPack(sample.normalBalls, sample.powerBall)

  t.is(ballPack.numNormalBalls, 5)
})

test('holds correct balls', t => {
  const sample = generateBalls()
  const ballPack = new BallPack(sample.normalBalls, sample.powerBall)

  t.deepEqual(ballPack.normalBalls, sample.normalBalls)

  t.is(ballPack.powerBall, sample.powerBall)
})

test("throws when number of NormalBalls doesn't match the spec", t => {
  t.throws(() => new BallPack([], new PowerBall(1)))
})

test("throws when NormalBalls argument doesn't supply all NormalBalls", t => {
  const sample = generateBalls()
  t.throws(
    () =>
      new BallPack(
        sample.normalBalls.slice(0, -1).concat(new PowerBall(5)),
        sample.powerBall
      )
  )
})

test("throws when NormalBalls aren't distinct", t => {
  const sample = generateBalls()
  t.throws(
    () =>
      new BallPack(
        sample.normalBalls.slice(0, -1).concat(new NormalBall(1)),
        sample.powerBall
      )
  )
})

test("throws when PowerBall argument doesn't supply PowerBall", t => {
  const sample = generateBalls()
  t.throws(() => new BallPack(sample.normalBalls, new NormalBall(1)))
})

test('factory returns a BallPack with given ball numbers', t => {
  const ballPack = BallPack.createFromNumbers([1, 2, 3, 4, 5], 6)

  t.true(ballPack instanceof BallPack)
  t.is(ballPack.normalBalls[0].number, 1)
  t.is(ballPack.normalBalls[1].number, 2)
  t.is(ballPack.normalBalls[2].number, 3)
  t.is(ballPack.normalBalls[3].number, 4)
  t.is(ballPack.normalBalls[4].number, 5)
  t.is(ballPack.powerBall.number, 6)
})

test('factory throws when non-array is supplied', t => {
  t.throws(() => BallPack.createFromNumbers(1, 6))
})
