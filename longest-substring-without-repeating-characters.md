## Longest Substring Without Repeating Characters

> From https://leetcode.com/problems/longest-substring-without-repeating-characters/description/

### Description

Given a string, find the length of the longest substring without repeating characters.

**Examples:**

Given ``"abcabcbb"``, the answer is ``"abc"``, which the length is 3.

Given ``"bbbbb"``, the answer is ``"b"``, with the length of 1.

Given ``"pwwkew"``, the answer is ``"wke"``, with the length of 3. Note that the answer must be a substring, ``"pwke"`` is a subsequence and not a substring.

### Thoughts
1. 顺序查找，找到下一个相同的字母后记录最长的字符串，然后往后继续查找。
2. 使用二分法从中间向两边查找，比对相同索引时的字母，若不同则继续往下找，若相同则左右剩余的字符串重新进行二分，直到找到头尾。
3. 每个字母都往后找一遍，找到相同的为止，每个均记录下来，最后取最长的。
4. 双指针扫描。

### Solution

#### #1
