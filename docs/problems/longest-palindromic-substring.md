# Longest Palindromic Substring

> Difficulty: Medium.
>
> See <https://leetcode.com/problems/longest-palindromic-substring/description/>

## Description

Given a string **s**, find the longest palindromic substring in **s**. You may assume that the maximum length of **s** is 1000.

**Example:**

```bash
Input: "babad"

Output: "bab"

Note: "aba" is also a valid answer.
```

**Example:**

```bash
Input: "cbbd"

Output: "bb"
```

## Thoughts

1. 单指针由左向右查找一个长度为2或者3的回文字符串，找到后由该字符串向两边查找扩大回文范围，直至非回文，此时指针继续向右移动，重复之前的查找，直至到最后一个字符。

## Solutions

### #1

Runtime: 96 ms

```TypeScript
/**
 * @param {string} s
 * @return {string}
 */
const longestPalindrome = (s: string) => {
  const length = s.length

  // If is single character string then return itself
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
```