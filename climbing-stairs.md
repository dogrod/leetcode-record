## Climbing Stairs

> From https://leetcode.com/problems/climbing-stairs/description/

### Description

You are climbing a stair case. It takes n steps to reach to the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

**Note:** Given n will be a positive integer.

**Example 1:**
```
Input: 2
Output:  2
Explanation:  There are two ways to climb to the top.

1. 1 step + 1 step
2. 2 steps
```

**Example 2:**
```
Input: 3
Output:  3
Explanation:  There are three ways to climb to the top.

1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step
```

## #1 递归（从上至下）
**Time Limit Exceeded**

```
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if (n === 0 || n === 1) {
        return 1
    }
    
    return climbStairs(n-1) + climbStairs(n-2)
    
};
```

## #2 使用数组（从下至上）
Runtime: 82ms

```
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    const arr = []
    arr[0] = 1
    arr[1] = 1
    
    for (let i = 2; i <= n+1; i++) {
        arr[i] = arr[i-1] + arr[i-2]
    }
    
    return arr[n]
};
```

### Reference

* [关于爬楼梯算法分析](http://www.jianshu.com/p/74cdb5d8d264)
