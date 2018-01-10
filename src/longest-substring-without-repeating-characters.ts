/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = (s: string) => {
  const length = s.length
  let leftEdge = 0
  let rightPointer = 0
  let longest = 0
  
  const set = new Set()
  
  while (leftEdge < length && rightPointer < length) {
    if (!set.has(s.charAt(rightPointer))) {
        set.add(s.charAt(rightPointer++))
        longest = Math.max(longest, rightPointer - leftEdge)
    } else {
        set.delete(s.charAt(leftEdge++))
    }
  }

  return longest
}

export default lengthOfLongestSubstring