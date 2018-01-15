/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = (x: number) => {
  if (x < 0) {
    return false
  }
  if (x < 10) {
    return true
  }
  if (x % 10 === 0) {
    return false
  } // 注意顺序，x 可能为 0
  
  let absX = Math.abs(x)
  let reverse = 0
  
  while (absX > 0) {
    reverse = reverse * 10 + absX % 10
    absX = Math.floor(absX / 10)
  }
  
  return x === reverse
}

export default isPalindrome