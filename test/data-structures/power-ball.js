const test = require('ava')

const PowerBall = require('../../src/data-structures/power-ball')

test('returns itself', t => {
  t.true(new PowerBall(1) instanceof PowerBall)
})

test('has correct name and [1, 19] range', t => {
  const powerBall = new PowerBall(1)
  t.is(powerBall.name, 'PowerBall')
  t.is(powerBall.minNumber, 1)
  t.is(powerBall.maxNumber, 19)
})

test('throws when number is out of range', t => {
  t.throws(() => new PowerBall(0))
  t.throws(() => new PowerBall(20))
})
