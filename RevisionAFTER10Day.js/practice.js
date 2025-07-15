let arr = [2, 4, 6, 7, 9, 10, 6, 23, -2];
// ---------------------------------------------------------------
// 1 - Find the Largest
// function LargestElement() {
//   let largest = -Infinity;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > largest) {
//       largest = arr[i];
//     }
//   }
//   return largest;
// }

// let result = LargestElement();
// console.log(result);
// ----------------------------------------------------------------
//2 - Find the second largest
//learning
// if you write in this order then Slargest will update same like largest (order matter)
//you should give both largest and second largest value -Infinity beacuse if all the items in the array present only negative values
//  largest = arr[i];
// Slargest = largest;

// function SecondLargest() {
//   if (arr.length < 2) {
//     console.log("there is no second largest increase the array size");
//   }
//   let largest = -Infinity;
//   let Slargest = -Infinity;

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > largest) {
//       Slargest = largest;
//       largest = arr[i];
//     } else if (arr[i] > Slargest && arr[i] != largest) {
//       Slargest = arr[i];
//     }
//   }
//   return Slargest;
// }

// const result = SecondLargest();
// console.log(result);
//--------------------------------------------------------------
// 3 -Remove Duplicates From an Sorted Array
// let nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

// function RemoveDuplicatesFromanSortedArray(nums) {
//   if (nums.length < 1) {
//     return "Array has not enough elements";
//   }
//   let x = 0;
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[x] !== nums[i]) {
//       x++;
//       nums[x] = nums[i];
//     }
//   }
//   return x + 1;
// }

// console.log(RemoveDuplicatesFromanSortedArray(nums));
//-----------------------------------------------------------------
//  4 - Remove Element

// function Removeelement() {
//   let nums = [0, 1, 2, 2, 3, 0, 4, 2];
//   let val = 2;
//   let x = 0;
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] != val) {
//       nums[x] = nums[i];
//       x++;
//     }
//   }
//   return x;
// }

// const result = Removeelement();
// console.log(result);

//------------------------------------------------------------------

// 5 - Reverse String
// var reverseString = function (s) {
//     let i = 0 ;
//     let j = s.length-1;

//     while (i < j ){

//         let  temp = s[i];
//         s[i] = s[j];
//         s[j] = temp ;
//         i++;
//         j--;

//     }
// }

//-------------------------------------------------------------------
// 6 - Best Time to buy and sell stocks

// let nums = [7, 1, 5, 3, 6, 4];
// Approach - first we shpuld think about that we have to track two things minimum value where we buy and second is max profit where we will sell and get the most profit we can not buy&sell on the first first day so we start a loop from 1 index and then keep a track of min element and maximum profit
// function findBestProfit() {
//   let max_profit = 0;
//   let min = nums[0];
//   for (let i = 1; i < nums.length; i++) {
//     if (nums[i] - min > max_profit) {
//       max_profit = nums[i] - min;
//     }
//     if (min > nums[i]) {
//       min = nums[i];
//     }
//   }
//   return max_profit;
// }

// const res = findBestProfit();
// console.log(res);

//-------------------------------------------------------------------
// 7 - Merge Two Sorted Array
// Brute Force

nums1 = [2, 3, 4];
nums2 = [4, 5, 7];

function MergeSortedArray(nums1, nums2) {
  let m = nums1.length;
  let n = nums2.length;

  let nums1Copy = nums1.slice(0, m);
  let merged = nums1Copy.concat(nums2);

  merged.sort((a, b) => a - b);

  for (let i = 0; i < m + n; i++) {
    nums1[i] = merged[i];
  }

  return nums1;
}

const result = MergeSortedArray(nums1, nums2);
console.log(result);

//Better Approach

var merge = function (nums1, m, nums2, n) {
  let nums1copy = nums1.slice(0, m);
  // we declare pointer here
  let p1 = 0;
  let p2 = 0;
  let i = 0;
  // put a condition
  while (p1 < m && p2 < n) {
    if (nums1copy[p1] < nums2[p2]) {
      nums1[i] = nums1copy[p1];
      p1++;
    } else {
      nums1[i] = nums2[p2];
      p2++;
    }
    i++;
  }

  while (p1 < m) {
    nums1[i] = nums1copy[p1];
    i++;
    p1++;
  }
  while (p2 < n) {
    nums1[i] = nums2[p2];
    i++;
    p2++;
  }
};

//------------------------------------------------Move Zeros

let Num = [0, 2, 0, 4, 5, 6];

var moveZeroes = function (nums) {
  let insertPos = 0;

  // First pass: move all non-zero elements forward
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[insertPos] = nums[i];
      insertPos++;
    }
  }

  // Second pass: fill remaining positions with zero
  for (let i = insertPos; i < nums.length; i++) {
    nums[i] = 0;
  }
};
