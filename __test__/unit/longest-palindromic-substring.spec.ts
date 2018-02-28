import longestPalindrome from '../../src/longest-palindromic-substring'

describe(
  'Longest Palindromic Substring',
  () => {
    test(
      `Should return "bb"`,
      () => {
        const input = 'cbbd'
        const expect = 'bb'

        const result = longestPalindrome(input)

        expect(result).toEqual(expect)
      }
    )
  }
)