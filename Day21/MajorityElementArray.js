// <Description>---------------</Description>
// 169. Majority Element
// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

// Example 1:

// Input: nums = [3,2,3]
// Output: 3
// Example 2:

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2

// Constraints:

// n == nums.length
// 1 <= n <= 5 * 104
// -109 <= nums[i] <= 109

// Follow-up: Could you solve the problem in linear time and in O(1) space?

// BruteForce
var majorityElement = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    let count = 0;
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        count++;
      }
    }
    if (count > Math.floor(nums.length / 2)) {
      return nums[i];
    }
  }
  return;
};

//better

const frequencyMap = (nums) => {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    map.set[(nums[i], (map.get(nums[i]) || 0) + 1)];
  }
  for (let [key, value] of map) {
    if (value > Math.floor(nums.length / 2)) {
      return key;
    }
  }
  return -1;
};
