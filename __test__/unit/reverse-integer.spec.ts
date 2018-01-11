import reverse from '../../src/reverse-integer'

describe(
  'Reverse Integer',
  () => {
    test(
      `Should return 321`,
      () => {
        const result = reverse(123)

        expect(result).toBe(321)
      }
    )

    test(
      `Should return -321`,
      () => {
        const result = reverse(-123)

        expect(result).toBe(-321)
      }
    )

    test(
      `Should return 21`,
      () => {
        const result = reverse(120)

        expect(result).toBe(21)
      }
    )
  }
)