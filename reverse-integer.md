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
  
    const str = x > 0 ? String(x) : String(x).substring(1, x.length)
    const reverse = str.split('').sort(() => 1).join('')
    
    return reverse > 2147483647 ? 0 : parseInt(x > 0 ? reverse : `-${reverse}`)
};
```
**注意：**32 位整数的范围为 -2147483648 ~ 2147483647