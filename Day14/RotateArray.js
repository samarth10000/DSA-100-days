// BruteForce
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

// optimal
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
