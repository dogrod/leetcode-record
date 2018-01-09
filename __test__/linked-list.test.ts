import LinkedList from '../src/utils/linked-list'

describe(
  'Singly Linked List',
  () => {
    test(
      'Insert and display function test',
      () => {
        const cities = new LinkedList()
        cities.insert('Conway', 'head')
        cities.insert('Russellville', 'Conway')
        cities.insert('Alma', 'Russellville')

        const expectResult = ['Conway', 'Russellville', 'Alma']
        expect(cities.getArray()).toEqual(expectResult)
      }
    )

    test(
      'Generate Singly Linked List from array',
      () => {
        const originArray = [7, 0, 8]
        const linkedList = new LinkedList(originArray)

        expect(linkedList.getArray()).toEqual(originArray)
      }
    )
  }
)