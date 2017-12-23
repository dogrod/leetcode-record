const expect = require('chai').expect

const LinkedList = require('../src/utils/linked-list')

describe(
  'Linked List',
  () => {
    test(
      'Insert and display function test',
      () => {
        const cities = new LinkedList()
        cities.insert('Conway', 'head')
        cities.insert('Russellville', 'Conway')
        cities.insert('Alma', 'Russellville')

        expect(cities.getArray()).to.deep.equal(['Conway', 'Russellville', 'Alma'])
      }
    )

    test(
      'Generate linked-list from array',
      () => {
        const array = [7, 0, 8]
        const linkedList = new LinkedList(array)

        expect(linkedList.getArray()).to.deep.equal(array)
      }
    )
  }
)
