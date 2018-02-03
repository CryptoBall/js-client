const test = require('ava')

const NormalBall = require('../../src/data-structures/normal-ball')

test('returns itself', t => {
  t.true(new NormalBall(1) instanceof NormalBall)
})

test('has correct name and [1, 29] range', t => {
  const normalBall = new NormalBall(1)
  t.is(normalBall.name, 'NormalBall')
  t.is(normalBall.minNumber, 1)
  t.is(normalBall.maxNumber, 29)
})

test('throws when number is out of range', t => {
  t.throws(() => new NormalBall(0))
  t.throws(() => new NormalBall(30))
})
