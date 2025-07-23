let arr = [5, 6, 5, 7, 4, 3, 6];

function Sum(n) {
  if (n < 0) {
    return 0;
  }
  if (arr[n] % 2 !== 0) {
    return arr[n] + Sum(n - 1);
  } else {
    return Sum(n - 1);
  }
}

console.log(Sum(arr.length - 1));

function Sum(n) {
  let isOdd = arr[n] % 2 !== 0;
  if (n == 0) {
    return isOdd ? arr[n] : 0;
  }
  return (isOdd ? arr[n] : 0) + Sum(n - 1);
}

console.log(Sum(arr.length - 1));
