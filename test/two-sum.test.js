const expect = require('chai').expect

const twoSum = require('../src/two-sum')

describe(
  'Two Sum: Given an array of integers, return indices of the two numbers such that they add up to a specific target.', 
  () => {
    test(
      'Solution 1',
      () => {
        const result = twoSum.solution1([2, 7, 11, 15], 9)
        expect(result).to.deep.equal([0, 1])
      }
    )

    test(
      'Solution 2',
      () => {
        const result = twoSum.solution2([2, 7, 11, 15], 9)
        expect(result).to.deep.equal([0, 1])
      }
    )
  }
)