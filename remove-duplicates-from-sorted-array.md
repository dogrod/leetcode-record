## Remove Duplicates from Sorted Array

> Difficulty: Easy

> From https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/

### Description

Given a sorted array, remove the duplicates [in-place](https://en.wikipedia.org/wiki/In-place_algorithm) such that each element appear only once and return the new length.

Do not allocate extra space for another array, you must do this by **modifying the input array** [in-place](https://en.wikipedia.org/wiki/In-place_algorithm) with O(1) extra memory.

**Example:**
```
Given nums = [1,1,2],

Your function should return length = 2, with the first two elements of nums being 1 and 2 respectively.
It doesn't matter what you leave beyond the new length.
```

### Thoughts

重点在于 sorted list，参考 example 即从左至右递增。那么只有可能相邻的两个（或多个）数重复。

1. 双指针从左至右一个一个查找，第二个指针等索引永远比第一个指针大 1，两个指针相互比对，若相同则删除右边的 value，指针不前进，不相同则指针前进一位。时间复杂度O(2n)，空间复杂度O(1)

### Solutions

#### #1
Runtime: 239ms
```
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let firstPointer = 0
    let secondPointer = 1
    
    while (secondPointer < nums.length) {
        if (nums[firstPointer] === nums[secondPointer]) {
            nums.splice(secondPointer, 1)
        } else {
            firstPointer += 1
            secondPointer += 1
        }
    }
};
```