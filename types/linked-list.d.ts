declare namespace ILinkedList {
  type NodeElement = number | string

  interface ListNode {
    element: NodeElement | null
    
    next: ListNode | null
  }
}
