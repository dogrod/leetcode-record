import isPalindrome from '../../src/palindrome-number'

describe(
  'Palindrome Number',
  () => {
    const input = -2147483648
    const expectResult = false
    test(
      `Should return ${false}`,
      () => {
        const result = isPalindrome(input)

        expect(result).toBe(expectResult)
      }
    )
  }
)
