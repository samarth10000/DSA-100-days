//BruteForce
function maxSubarraySum(nums) {
  let maxi = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i < nums.length; i++) {
    for (let j = i; j < nums.length; j++) {
      let sum = 0;
      for (let k = i; k <= j; k++) {
        sum += nums[k];
      }
      maxi = Math.max(maxi, sum);
    }
  }

  return maxi;
}

// Optimal
function maxSubArray(nums) {
  let maxi = Number.MIN_SAFE_INTEGER;
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];

    if (sum > maxi) {
      maxi = sum;
    }

    if (sum < 0) {
      sum = 0;
    }
  }

  return maxi;
}
