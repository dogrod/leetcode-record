/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var solution1 = function(nums, target) {
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
var solution2 = function(nums, target) {
  const length = nums.length
  
  for (let i = 0; i < length; i++) {
      const anotherPart = target - nums[i]
      const indexOfAnotherPart = nums.indexOf(anotherPart)
      if (indexOfAnotherPart > -1 && i !== indexOfAnotherPart) {
          return [i, indexOfAnotherPart]
      }
  }
}

module.exports = {
  solution1,
  solution2,
}