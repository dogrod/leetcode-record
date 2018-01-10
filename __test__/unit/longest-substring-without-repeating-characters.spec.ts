import lengthOfLongestSubstring from '../../src/longest-substring-without-repeating-characters'

describe(
  'Longest Substring Without Repeating Characters',
  () => {
    const input = 'pwwkew'
    const expectResult = 3

    test(
      `Should return ${expectResult}`,
      () => {
        const result = lengthOfLongestSubstring(input)

        expect(result).toEqual(expectResult)
      }
    )
  }
)