import isIsomorphic from '../src/isomorphic-strings'

describe(
  'Isomorphic Strings: Given two strings s and t, determine if they are isomorphic.',
  () => {
    test(
      'Should return true',
      () => {
        const result = isIsomorphic('paper', 'title')
        expect(result).toEqual(true)
      }
    )

    test(
      'Should return false',
      () => {
        const result = isIsomorphic('foo', 'bar')
        expect(result).toEqual(false)
      }
    )
  }
)