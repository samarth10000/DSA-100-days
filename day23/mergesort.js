let nums = [3, 5, 6, 8, 6, 4, 3, 6, 8, 6];
var sortArray = function (nums) {
  if (nums.length <= 1) return nums;
  let mid = Math.floor(nums.length / 2);
  let left = sortArray(nums.slice(0, mid));
  let right = sortArray(nums.slice(mid));
  return merge(left, right);
};

function merge(left, right) {
  let res = [],
    i = 0,
    j = 0;
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      res.push(left[i++]);
    } else {
      res.push(right[j++]);
    }
  }
  return [...res, ...left.slice(i), ...right.slice(j)];
}
