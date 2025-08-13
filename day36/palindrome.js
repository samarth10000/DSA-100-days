// Given the head of a singly linked list, return true if it is a palindrome or false otherwise.

// Example 1:

// Input: head = [1,2,2,1]
// Output: true
// Example 2:

// Input: head = [1,2]
// Output: false

// Constraints:

// The number of nodes in the list is in the range [1, 105].
// 0 <= Node.val <= 9

// Follow up: Could you do it in O(n) time and O(1) space?
//Approach One

var isPalindrome = function (head) {
  let arr = [];
  let curr = head;
  while (curr !== null) {
    arr.push(curr.val);
    curr = curr.next;
  }
  let left = 0,
    right = arr.length - 1;
  while (left < right) {
    if (arr[left++] !== arr[right--]) return false;
  }
  return true;
};

//Approach two
var isPalindrome = function (head) {
  let slow = head,
    fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // Reverse second half
  let prev = null;
  while (slow) {
    let temp = slow.next;
    slow.next = prev;
    prev = slow;
    slow = temp;
  }

  // Compare two halves
  let first = head,
    second = prev;
  while (second) {
    if (first.val !== second.val) return false;
    first = first.next;
    second = second.next;
  }

  return true;
};
