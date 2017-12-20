## Longest Common Prefix

> Difficulty: Easy

> From https://leetcode.com/problems/longest-common-prefix/description/

### Description

Write a function to find the longest common prefix string amongst an array of strings.

### Thoughts
1. 先将数组进行按字符串长度排序，取长度最短的进行比对。时间复杂度 O(n^2)
2. 两两前后一一进行比对。时间复杂度 O(n^2)

### Solutions

#### #1
Runtime: 95ms
```
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (strs.length === 0) return ''
    if (strs.length === 1) return strs[0]
    
    strs.sort((a, b) => a.length - b.length)
    
    let prefix = strs[0]
    for(let i = 0; i < strs.length; i++) {
        if (strs[i].substring(0, prefix.length) !== prefix) {
            for(let j = 0; j < prefix.length; j++) {
                if (strs[i].charAt(j) !== prefix.charAt(j)) {
                    prefix = prefix.substring(0, j)
                }
            }
        }
    }
    
    return prefix
};
```
**注意：** ``strs[i]`` 与 ``prefix`` 有可能为 ``"ca"`` 和 ``"a"`` 这样的情况。所以不能使用 ``strs[i].indexOf(prefix)`` 进行判断，而是直接截取头部同等长度的字符串进行比对。