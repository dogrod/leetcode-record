class ListNode {
  public element: ILinkedList.NodeElement | null

  public next: ILinkedList.ListNode | null

  constructor(item?: string | number) {
    this.element = (typeof item !== 'undefined') ? item : null
    this.next = null
  }
}

export default ListNode