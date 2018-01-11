/**
 * @param {number} x
 * @return {number}
 */
const reverse = (x: number) => {
  if (x > -10 && x < 10) {
    return x
  }

  let absX = Math.abs(x)
  let result = 0
  
  while (absX > 0) {
    result = result * 10 + absX % 10
    // Origin Code:
    // absX = parseInt(absX / 10, 10)
    // Don't use parseInt to do this operation -- use Math.floor.
    // Explanation: https://stackoverflow.com/questions/39475166/typescript-error-when-using-parseint-on-a-number
    absX = Math.floor(absX / 10)
  }
  
  return result > Math.pow(2, 31) ? 0 : (x > 0 ? result : -result)
}

export default reverse