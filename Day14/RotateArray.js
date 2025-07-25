// BruteForce for Right shift
var rotate = function (nums, k) {
  let n = nums.length;
  let arr = [];
  for (let i = 0; i < n; i++) {
    arr[(i + k) % n] = nums[i];
  }

  for (let i = 0; i < n; i++) {
    nums[i] = arr[i];
  }
  return nums;
};

optimal;
var rotate = function (nums, k) {
  const n = nums.length;
  k = k % n;
  const rotated = new Array(n).fill(0);

  for (let i = 0; i < n; i++) {
    rotated[(i + k) % n] = nums[i];
  }

  for (let i = 0; i < n; i++) {
    nums[i] = rotated[i];
  }
};

// Rotate array to the left by d places

// BruteForce Approach------------------------------------------
let arr = [3, 4, 5, 6, 7, 8, 9];
const LeftRotate = (arr) => {
  let n = arr.length;
  let d = 3;
  d = d % n;
  let temp = [];
  for (let i = 0; i < d; i++) {
    temp[i] = arr[i];
  }
  for (let i = d; i < n; i++) {
    arr[i - d] = arr[i];
  }
  for (let i = 0; i < d; i++) {
    arr[n - d + i] = temp[i];
  }

  return arr;
};

// console.log(LeftRotate(arr));

// Optimal Approach with out using any extra space----------------

// let arr = [3, 4, 5, 6, 7, 8, 9];

//reverse first d elements
// reverse rest of the elements by d places
// reverse the whole array by d element
