import {
  solution1,
  solution2
} from '../src/two-sum'

const givenNums = [2, 7, 11, 15]
const target = 9

const expectResult = [0, 1]

describe(
  'Two Sum: Given an array of integers, return indices of the two numbers such that they add up to a specific target.',
  () => {
    test(
      'Solution 1',
      () => {
        const result = solution1(givenNums, target)
        expect(result).toEqual(expectResult)
      }
    )

    test(
      'Solution 2',
      () => {
        const result = solution2(givenNums, target)
        expect(result).toEqual(expectResult)
      }
    )
  }
)
