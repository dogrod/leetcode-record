## Palindrome Number

> Difficulty: Easy

> From https://leetcode.com/problems/palindrome-number/description/

### Description
Determine whether an integer is a palindrome. Do this without extra space.

**Some hints:**

Could negative integers be palindromes? (ie, -1)

If you are thinking of converting the integer to string, note the restriction of using extra space.

You could also try reversing an integer. However, if you have solved the problem "Reverse Integer", you know that the reversed integer might overflow. How would you handle such case?

There is a more generic way of solving this problem.



### Thoughts
1. 同 [Reverse Integer](/reverse-integer) 中的第二种解法，将 number 倒置进行对比

### Solutions

#### #1
Runtime: 496ms
```
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0) return false
    
    let absX = Math.abs(x)
    let reverse = 0
    
    while (absX > 0) {
      reverse = reverse * 10 + absX % 10
      absX = parseInt(absX / 10, 10)
    }
    
    return (x === reverse || x === -reverse)
};
```
**注意：**负数并不是回文数，需要过滤