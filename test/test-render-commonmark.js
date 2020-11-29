const assert = require('assert')
const texme = require('../texme.js')

describe('renderCommonMark', function () {
  before(function () {
    // Ensure that commonmark is loaded.
    texme.main()
  })

  it('simple', function () {
    const input = '*Foo* **Bar** `Baz`'
    const expected = '<p><em>Foo</em> <strong>Bar</strong> <code>Baz</code></p>\n'
    assert.deepStrictEqual(texme.renderCommonMark(input), expected)
  })
})
