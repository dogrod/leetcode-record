import climbStairs from '../../src/climbing-stairs'

describe(
  'Climbing stairs',
  () => {
    const input = 10
    const expectOutput = 89

    test(
      `Should return ${expectOutput}`,
      () => {
        const result = climbStairs(input)

        expect(result).toEqual(expectOutput)
      }
    )
  }
)