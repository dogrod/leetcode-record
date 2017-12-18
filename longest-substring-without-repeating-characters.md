## Longest Substring Without Repeating Characters

> From https://leetcode.com/problems/longest-substring-without-repeating-characters/description/

### Description

Given a string, find the length of the longest substring without repeating characters.

**Examples:**

Given ``"abcabcbb"``, the answer is ``"abc"``, which the length is 3.

Given ``"bbbbb"``, the answer is ``"b"``, with the length of 1.

Given ``"pwwkew"``, the answer is ``"wke"``, with the length of 3. Note that the answer must be a substring, ``"pwke"`` is a subsequence and not a substring.

### Thoughts
1. 找出每个字符出现的位置，有重复的前后相减，不重复或该字母最后一个索引使用单词最后一个字母点索引减该索引值，相隔最长的即为结果。**Failed**
2. 通过左闭右开的移动窗口进行由左向右的扫描（抽象的来看就是[i, j)，i 固定，j 向右移动）。初始化时声明一个 Set 用于存储出现在窗口中的字母，如果指针扫描到的字母出现过（即 s.charAt(j) 存在），则将左边界向右移动一个（此时的左边界已存在于 set 中），如此循环移动至右指针到最后。复杂度 O(2n)

### Solution

#### #1

**Failed**

仅计算了两个相同字符的长度，忽略了两个相同字符中间存在另外两个相同的字符。
```
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if (s.length <= 1) return s
    
    const alphabetIndexMap = {}
    
    let surplusString = s
    let index = 0
    
    while (index < s.length) {
        let alphabet = surplusString.substring(0, 1)
        
        if (!alphabetIndexMap[alphabet]) {
            alphabetIndexMap[alphabet] = {
                indexCollection: []
            }
        }
        
        const indexCollection = alphabetIndexMap[alphabet].indexCollection
        
        indexCollection.push(index)
        
        const indexCollectionLength = indexCollection.length
        
        if (indexCollection.length >= 2) {
            const length = indexCollection[indexCollectionLength - 1] - indexCollection[indexCollectionLength - 2]
            
            if (!alphabetIndexMap[alphabet].max || length > alphabetIndexMap[alphabet].max.length) {
                alphabetIndexMap[alphabet].max = {
                    start: indexCollection[indexCollectionLength - 2],
                    end: indexCollection[indexCollectionLength - 1],
                    length: length,
                }
            }
        }
        
        surplusString = surplusString.substring(1, surplusString.length)
        
        index++
    }
    
    const sortArray = Object.keys(alphabetIndexMap).map((key) => {
        const value = alphabetIndexMap[key]
        
        const lastLength = s.length - 1 - value.indexCollection[value.indexCollection.length - 1]
        
        return lastLength > value.max.length ? {
            start: value.indexCollection[value.indexCollection.length - 1],
            end: s.length -1,
            length: lastLength,
        } : value.max
    })
    
    let longest = 0
    sortArray.forEach((item) => {
        if (item.length > longest) {
            console.log(s.substring(item.start, item.end))
            longest = item.length
        } 
    })
    
    return longest
}
```

#### #2
Runtime: 162ms
```
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let length = s.length
    let leftEdge = 0
    let rightPointer = 0
    let longest = 0
    
    let set = new Set()
    
    while (leftEdge < length && rightPointer < length) {
        if (!set.has(s.charAt(rightPointer))) {
            set.add(s.charAt(rightPointer++))
            longest = Math.max(longest, rightPointer - leftEdge)
        } else {
            set.delete(s.charAt(leftEdge++))
        }
    }

    return longest
};
```