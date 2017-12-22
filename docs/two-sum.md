## Two Sum

> Difficulty: Easy

> From https://leetcode.com/problems/two-sum/description/

### Description
Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

**Example:**
```
Given nums = [2, 7, 11, 15], target = 9,
Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
```

### Thoughts
1. 暴力方法，嵌套遍历数组两次，每次都与期望结果做对比，知道找到结果。缺点：性能损耗严重。时间复杂度 O(n^2)
2. 遍历数组一次，每次都计算一次当前数字期望的另外一个数字，并在数组中查找，如果存在则返回结果。时间复杂度 O(n)

### Solutions

#### #1
Runtime: 195ms

```
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j]
            }
        }
    }
};
```

#### #2
Runtime: 245ms
```
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const length = nums.length
    
    for (let i = 0; i < length; i++) {
        const anotherPart = target - nums[i]
        const indexOfAnotherPart = nums.indexOf(anotherPart)
        if (indexOfAnotherPart > -1 && i !== indexOfAnotherPart) {
            return [i, indexOfAnotherPart]
        }
    }
};
```
**注意：**有可能存在自身相加等于期望值的情况，例如 ``[3, 2, 4] 6`` 
