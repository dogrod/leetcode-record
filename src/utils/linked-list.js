/**
 * Definition for node of linked-list 
 */
const ListNode = function(element) {
  this.element = element
  this.next = null
}

/**
 * Find specific item in linked-list
 */
const find = function(item) {
  let currentNode = this.head
  while (currentNode.element != item) {
    currentNode = currentNode.next
  }
  return currentNode
}

/**
 * Insert a new element to linked-list by specific location
 */
const insert = function(newElement, item = 'head') {
  let newNode = new ListNode(newElement)
  let currentNode = this.find(item)
  newNode.next = currentNode.next
  currentNode.next = newNode
}

/**
 * Return a array that contains all item in linked-list
 */
const getArray = function() {
  let currentNode = this.head
  let array = []
  while (currentNode.next !== null) {
    array.push(currentNode.next.element)
    currentNode = currentNode.next
  }
  return array
}

const fromArray = function(array) {
  let currentNode = this.head

  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
    const newNode = new ListNode(element)
    currentNode.next = newNode

    currentNode = newNode
  }
}

/**
 * Definition for linked list
 */
const LinkedList = function(array) {
  this.head = new ListNode('head')
  this.find = find
  this.insert = insert
  // this.remove = remove
  this.getArray = getArray
  this.fromArray = fromArray

  if (!Array.isArray(array)) return
  this.fromArray(array)
}

module.exports = LinkedList