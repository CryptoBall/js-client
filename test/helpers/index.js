const Client = require('../..')

function beforeEach(t) {
  const client = new Client({})
  Object.assign(t.context, { client })
}

function afterEach() {}

module.exports = { beforeEach, afterEach }
