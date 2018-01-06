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
var addTwoNumbers = function(l1, l2) {
  let List = new ListNode(0)
  let head = List // 期望的 ListNode
  let sum = 0 // 当前round的和，最大的情况为18，当sum >= 10时，carry = 1，sum = sum - 10
  let carry = 0 // 十位数字，最大为1，在十位计算完成后归零
  
  while (l1 || l2 || sum > 0) {
      sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + sum
      
      if (l1) l1 = l1.next
      if (l2) l2 = l2.next
      
      if (sum >= 10) {
          carry = 1
          sum = sum -10
      }
      head.next = new ListNode(sum)
      head = head.next
      
      sum = carry
      carry = 0
  }
  
  return List.next
}

module.exports = addTwoNumbers