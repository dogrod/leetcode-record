## Add Two Numbers

> Difficulty: Medium

> From https://leetcode.com/problems/add-two-numbers/description/

### Description

You are given two **non-empty** linked lists representing two non-negative integers. The digits are stored in **reverse order** and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

**Example**
```
Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
Explanation: 342 + 465 = 807.
``` 

### Thoughts
1. 取出所有的数，进行倒置再相加，再倒置还原成 linked list
2. 将对应索引值的数字相加（即 x[i] + x[j]），商留至下次计算，取出余数加上前一次计算的商为结果中当前索引的值。

### Solutions

#### #1
因为JavaScript中当数字大于53位时会对数字采用科学计数法，导致数字精度丢失，所以该方法在数字足够大时**Failed**，需要自定义非科学计数方法。
```
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
    const getFullNumberOfListNode = (listNode, number = '') => {
        number = String(listNode.val) + number
        
        if (listNode.next) {
            return getFullNumberOfListNode(listNode.next, number)
        } else {
            console.log(number)
            return Number(number)
        }
    }
    
    let stringSum = String(getFullNumberOfListNode(l1) + getFullNumberOfListNode(l2))
    let sumListNode
    console.log(stringSum)
    for (let i = 0; i < stringSum.length; i ++) {
        let currentListNode = new ListNode(Number(stringSum.charAt(i)))
        
        if (!sumListNode) {
            sumListNode = currentListNode
        } else {
            currentListNode.next = sumListNode
            
            sumListNode = currentListNode
        }
    }
    
    return sumListNode
};
```

#### #2
Runtime: 199ms
```
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
};
```
**注意** head 不可以直接使用 ``let head = new List()`` 进行声明，而是引用 List 进行声明，否则返回 ``head.next`` 返回的是整个链表的最后一个，即 ``null``
最终的 List 为 ``0 -> 7 -> 0 -> 8``