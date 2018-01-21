const test = require('ava')

const BaseBall = require('../../src/data-structures/base-ball')

test('returns itself', t => {
  t.true(new BaseBall(0) instanceof BaseBall)
})

test('has correct name and [0, 0] range', t => {
  const baseBall = new BaseBall(0)
  t.is(baseBall.name, 'BaseBall')
  t.is(baseBall.minNumber, 0)
  t.is(baseBall.maxNumber, 0)
})

test('throws when non-integer argument is provided', t => {
  t.throws(() => new BaseBall())
  t.throws(() => new BaseBall('0'))
  t.throws(() => new BaseBall(0.5))
})

test('throws when number is out of range', t => {
  t.throws(() => new BaseBall(1))
})
