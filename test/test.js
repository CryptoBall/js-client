const test = require('ava')

const Client = require('..')
const { beforeEach, afterEach } = require('./helpers')

test.beforeEach(beforeEach)
test.afterEach(afterEach)

test('returns itself', t => {
  t.true(t.context.client instanceof Client)
})

// test('sets a config object', t => {
//   const script = new Script(false)
//   t.true(script instanceof Script)
// })

// test('renders name', t => {
//   const { script } = t.context
//   t.is(script.renderName(), 'script')
// })

// test('sets a default name', t => {
//   const { script } = t.context
//   t.is(script._name, 'script')
// })
