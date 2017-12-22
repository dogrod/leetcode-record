## Longest Palindromic Substring

> Difficulty: Medium

> From https://leetcode.com/problems/longest-palindromic-substring/description/

### Description

Given a string **s**, find the longest palindromic substring in **s**. You may assume that the maximum length of **s** is 1000.

**Example:**
```
Input: "babad"

Output: "bab"

Note: "aba" is also a valid answer.
```

**Example:**
```
Input: "cbbd"

Output: "bb"
```

### Thoughts
1. 找出所有的子串，分别进行判断是否为回文。

### Solutions

#### #1