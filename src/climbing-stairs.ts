/**
 * @param {number} n
 * @return {number}
 */
const climbStairs = (n: number) => {
  const array = []

  array[0] = 1
  array[1] = 1

  for (let index = 2; index <= n + 1; index++) {
    array[index] = array[index - 1] + array[index - 2]
  }

  return array[n]
}

export default climbStairs