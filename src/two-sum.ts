/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
let solution1: Number[] = (nums: Number[], target: Number) => {
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
let solution2: Number[] = (nums: Number[], target: Number) => {
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
