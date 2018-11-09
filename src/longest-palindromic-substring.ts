/**
 * @param {string} s
 * @return {string}
 */
const longestPalindrome = (s: string) => {
  const length = s.length

  if (length === 1) {
    return s
  }

  // Default is first char
  let longestPalindromeSubString = s.charAt(0)

  /**
   * Expand string
   * @param left - Left scanning edge
   * @param right - Right scanning edge
   * @param lpss - Longest palindrome sub string
   * @returns new longest palindrome sub string
   */
  const expandString = (left: number, right: number, lpss: string) => {
    while (
      left >= 0
      && right < length
      && s.charAt(left - 1) === s.charAt(right + 1)
    ) {
      left--
      right++
    }

    return right - left + 1 > lpss.length ? s.substring(left, right + 1) : lpss
  }

  // Scanning...
  for (let pointer = 0; pointer < length; pointer++) {
    const current = s.charAt(pointer)
    const next = s.charAt(pointer + 1)
    const afterNext = s.charAt(pointer + 2)

    // Is palindrome string
    if (current === next) {
      longestPalindromeSubString = expandString(pointer, pointer + 1, longestPalindromeSubString)
    }

    if (current === afterNext) {
      longestPalindromeSubString = expandString(pointer, pointer + 2, longestPalindromeSubString)
    }
  }
  
  return longestPalindromeSubString
}

export default longestPalindrome
