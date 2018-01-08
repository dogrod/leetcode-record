declare class ILinkedList {
  head: ILinkedList.ListNode

  find: (item: ILinkedList.NodeElement) => ILinkedList.ListNode

  insert: (newElement: ILinkedList.NodeElement, item: ILinkedList.NodeElement) => ILinkedList.ListNode
  
  remove: (item: ILinkedList.NodeElement) => ILinkedList.ListNode 
  
  getArray: () => ILinkedList.NodeElement[]

  fromArray: (array: ILinkedList.NodeElement[]) => ILinkedList.ListNode
}

declare namespace ILinkedList {
  type NodeElement = number | string

  interface ListNode {
    element: NodeElement | null,
    next: ListNode | null
  }
}

export = ILinkedList