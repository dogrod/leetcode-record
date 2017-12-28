const expect = require('chai').expect

const isomorphicStrings = require('../src/isomorphic-strings')

describe(
  'Isomorphic Strings: Given two strings s and t, determine if they are isomorphic.',
  () => {
    test(
      'Should return true',
      () => {
        const result = isomorphicStrings.isIsomorphic('paper', 'title')
        expect(result).to.be.equal(true)
      }
    )

    test(
      'Should return false',
      () => {
        const result = isomorphicStrings.isIsomorphic('foo', 'bar')
        expect(result).to.be.equal(false)
      }
    )
  }
)