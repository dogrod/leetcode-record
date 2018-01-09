import ListNode from './utils/linked-list/list-node'

interface CustomListNode extends ILinkedList.ListNode {
  element: number
  next: CustomListNode
}

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = (
  l1: ILinkedList.ListNode | null, 
  l2: ILinkedList.ListNode | null
) => {
  const List = new ListNode(0)
  let head = List // 期望的 ListNode
  let sum = 0 // 当前round的和，最大的情况为18，当sum >= 10时，carry = 1，sum = sum - 10
  let carry = 0 // 十位数字，最大为1，在十位计算完成后归零
  
  while (l1 || l2 || sum > 0) {
    if (l1) {
      sum += (typeof l1.element === 'number' ? l1.element : 0)
      l1 = l1.next || null
    }
    if (l2) {
      sum += (typeof l2.element === 'number' ? l2.element : 0)      
      l2 = l2.next || null
    }
    
    if (sum >= 10) {
      carry = 1
      sum = sum - 10
    }
    head.next = new ListNode(sum)
    head = head.next
    
    sum = carry
    carry = 0
  }

  // 确保List.next不为undefined或者null
  if (!List.next) {
    List.next = new ListNode(0)
  }

  return List.next
}

export default addTwoNumbers