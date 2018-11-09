import longestPalindrome from '../../src/longest-palindromic-substring'

describe(
  'Longest Palindromic Substring',
  () => {
    test(
      'Single character should return itself',
      () => {
        const input = 'a'
        const expectation = 'a'

        const result = longestPalindrome(input)

        expect(result).toEqual(expectation)
      }
    )

    test(
      `Should return "ccc"`,
      () => {
        const input = 'ccc'
        const expectation = 'ccc'

        const result = longestPalindrome(input)

        expect(result).toEqual(expectation)
      }
    )

    test(
      `Should return "bb"`,
      () => {
        const input = 'cbbd'
        const expectation = 'bb'

        const result = longestPalindrome(input)

        expect(result).toEqual(expectation)
      }
    )

    test(
      `Should return "bab"`,
      () => {
        const input = 'babad'
        const expectation = 'bab'

        const result = longestPalindrome(input)

        expect(result).toEqual(expectation)
      }
    )

    test(
      `Should return "abcba"`,
      () => {
        const input = 'abcba'
        const expectation = 'abcba'

        const result = longestPalindrome(input)

        expect(result).toEqual(expectation)
      }
    )
  }
)