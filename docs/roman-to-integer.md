## Roman to Integer

> Difficulty: Easy

> From https://leetcode.com/problems/roman-to-integer/description/

### Description

Given a roman numeral, convert it to an integer.

Input is guaranteed to be within the range from 1 to 3999.

### Thoughts
1. 创建罗马字 - 数字字典，然后提取当前的字母和下一个字母进行比对，根据规律，从左至右递减，如果 prev < next（只有一个前一字母小于后一字母的可能），则和为 sum + (next - prev)，索引+2，其他情况一律 sum + prev，时间复杂度 O(n)

### Solutions

#### #1
Runtime: 279ms
```
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let sum = 0
    const romanDictionary = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000,
    }
    let i = 0
    while (i < s.length) {
        const currentValue = romanDictionary[s.charAt(i)]
        const nextValue = romanDictionary[s.charAt(i + 1)] || 0
        
        if (currentValue >= nextValue) {
            sum += currentValue
            i++
        } else {
            sum += (nextValue - currentValue)
            i+=2
        }
    }
    return sum
};
```