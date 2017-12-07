## Merge Two Sorted Lists

> From https://leetcode.com/problems/merge-two-sorted-lists/description/

### Description

Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.

**Example:**
```
Input: 1->2->4, 1->3->4
Output: 1->1->2->3->4->4
```

## #1 递归查找下一项并push进数组，最后使用sort函数进行排序
Runtime: 122 ms
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
var mergeTwoLists = function(l1, l2) {
    let result = []

    const getVal = (list, list2) => {
        if (list && list.val !== null) {
            result.push(list.val)
        }
        
        if ((!list || list.val === null || !list.next) && list2) {
            return getVal(list2)
        }

        if (list && list.next) {
            return getVal(list.next, list2)
        }
        
        return result
    }
    
    return getVal(l1, l2).sort((a, b) => a-b)
    
};
```
**注意：**这里有两个需要注意的点
1. 输入的listNode有可能为空或者为0，不可以直接使用 ``!list.val`` 判断
2. ``sort`` 函数不传入参数时默认是按照元素的ascii码增序排序的，负数排序存在问题，故传入 ``(a, b) => a-b`` 进行简单排序。