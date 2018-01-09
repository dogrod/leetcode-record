## Isomorphic Strings

> Difficulty: Easy

> From https://leetcode.com/problems/isomorphic-strings/description/

### Description

Given two strings s and t, determine if they are isomorphic.

Two strings are isomorphic if the characters in s can be replaced to get t.

All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character but a character may map to itself.

**For example,**
Given ``"egg"``, ``"add"``, return true.

Given ``"foo"``, ``"bar"``, return false.

Given ``"paper"``, ``"title"``, return true.

**Note:**
You may assume both s and t have the same length.

### Thoughts
1. 记录并检查字母第一次出现的位置，使用两个Map记录对应的index，并向右扫描进行对比

### Solutions
#### #1
Runtime: 88ms
```
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    if (s.length <= 1) return true
    
    let alphabetIndexMap = {
        first: {},
        second: {},
    }
    
    for(let i = 0; i < s.length; i++) {
        const firstWordCurrentAlphabet = s.substr(i, 1)
        const secondWordCurrentAlphabet = t.substr(i, 1)
        
        const firstWordCurrentAlphabetFirstIndex = alphabetIndexMap.first[firstWordCurrentAlphabet]
        const secondWordCurrentAlphabetFirstIndex = alphabetIndexMap.second[secondWordCurrentAlphabet]
        
        if (!firstWordCurrentAlphabetFirstIndex && !secondWordCurrentAlphabetFirstIndex) {
            alphabetIndexMap.first[firstWordCurrentAlphabet] = i
        }
        
        if (!secondWordCurrentAlphabetFirstIndex) {
            alphabetIndexMap.second[secondWordCurrentAlphabet] = i
        }
        
        if (firstWordCurrentAlphabetFirstIndex !== secondWordCurrentAlphabetFirstIndex) {
            return false
        }
    }
    
    return true
}
```