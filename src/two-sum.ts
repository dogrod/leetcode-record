/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const solution1 = (nums: number[], target: number) => {
  for (let i = 0; i < nums.length; i++) {
      for (let j = i + 1; j < nums.length; j++) {
          if (nums[i] + nums[j] === target) {
              return [i, j]
          }
      }
  }
}

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const solution2 = (nums: number[], target: number) => {
  const length = nums.length

  for (let i = 0; i < length; i++) {
      const anotherPart = target - nums[i]
      const indexOfAnotherPart = nums.indexOf(anotherPart)
      if (indexOfAnotherPart > -1 && i !== indexOfAnotherPart) {
          return [i, indexOfAnotherPart]
      }
  }
}

export {
  solution1,
  solution2,
}
