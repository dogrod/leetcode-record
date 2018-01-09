import addTwoNumbers from '../../src/add-two-numbers'

import LinkedList from '../../src/utils/linked-list'

describe(
  'Add two numbers',
  () => {
    test(
      'Should return 7 -> 0 -> 8',
      () => {
        const input1 = [2, 4, 3]
        const input2 = [5, 6, 4]

        const param1 = new LinkedList(input1)
        const param2 = new LinkedList(input2)
        
        const result = addTwoNumbers(param1.head, param2.head)

        expect(LinkedList.getArray(result)).toEqual([7, 0, 8])
      }
    )
  }
)