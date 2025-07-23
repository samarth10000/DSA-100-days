// Sum of All Elements in an Array
let arr = [5, 6, 5, 7, 4, 3, 6];

function Sum(n) {
  if (n == 0) {
    return arr[0];
  }
  return arr[n] + Sum(n - 1);
}

console.log(Sum(arr.length - 1));
