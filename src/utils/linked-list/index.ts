import ListNode from './list-node'

/**
 * Implementation of Singly Linked List with TypeScript
 */
class LinkedList {
  public head: ILinkedList.ListNode
  
  /**
   * Return a array that contains all item in linked-list by ascending-index order
   */
  public static getArray(currentNode: ILinkedList.ListNode) {
    const array = []

    while (
      currentNode.next !== null
    ) {
      array.push(currentNode.next.element)
      currentNode = currentNode.next
    }

    return array
  }

  /**
   * Find specific item in linked-list
   */
  public find(item: ILinkedList.NodeElement) {
    let currentNode: ILinkedList.ListNode | null = this.head
    while (
      currentNode !== null
      && currentNode.element !== item) {
      currentNode = currentNode.next
    }
    return currentNode
  }

  /**
   * Insert a new element to linked-list by specific location
   */
  public insert(newItem: ILinkedList.NodeElement, currentItem: ILinkedList.NodeElement) {
    const newNode = new ListNode(newItem)
    const currentNode = this.find(currentItem) || this.head

    newNode.next = currentNode.next
    currentNode.next = newNode

    return currentNode
  }

  /**
   * Convert array to Linked List
   */
  public fromArray(array: ILinkedList.NodeElement[]) {
    let currentNode = this.head

    for (const item of array) {
      const newNode = new ListNode(item)
      currentNode.next = newNode

      currentNode = newNode
    }

    return this.head
  }
  
  constructor(array?: ILinkedList.NodeElement[]) {
    this.head = new ListNode('head')

    if (!Array.isArray(array)) {
      return
    }
    this.fromArray(array)
  }
}

export default LinkedList