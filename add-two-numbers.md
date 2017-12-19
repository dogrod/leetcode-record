## Add Two Numbers

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

### Solutions

#### #1