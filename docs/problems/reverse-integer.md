## Reverse Integer

> Difficulty: Easy

> From https://leetcode.com/problems/reverse-integer/description/

### Description
Given a 32-bit signed integer, reverse digits of an integer.

**Example 1:**
```
Input: 123
Output:  321
```
**Example 2:**
```
Input: -123
Output: -321
```
**Example 3:**
```
Input: 120
Output: 21
```
**Note:**
Assume we are dealing with an environment which could only hold integers within the 32-bit signed integer range. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.

### Thoughts
1. 将数组转成字符串再转为数组然后进行倒置。需要注意正负数。
2. 利用10的余数，从右往左取余数并 x10 添加至新的整数中。

### Solutions

#### #1
Runtime: 139ms
```
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    if (x > -10 && x < 10) return x
  
    const str = String(Math.abs(x))
    const reverse = str.split('').sort(() => 1).join('')
    
    return reverse > Math.pow(2, 31) ? 0 : parseInt(x > 0 ? reverse : `-${reverse}`)
};
```
**注意：**32 位整数的范围为 +-2^31，题目说明 overflow 时返回 0

#### #2
Runtime: 135ms
```
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    if (x > -10 && x < 10) return x
  
    let absX = Math.abs(x)
    let result = 0
    
    while (absX > 0) {
      result = result * 10 + absX % 10
      absX = parseInt(absX / 10, 10)
    }
    
    return result > Math.pow(2, 31) ? 0 : (x > 0 ? result : -result)
};
```