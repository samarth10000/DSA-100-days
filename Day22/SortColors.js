let arr = [2, 0, 2, 1, 1, 0];

// Bruteforce
function sortArray(arr) {
  arr.sort((a, b) => a - b);
}

// Better
function sortArray(arr) {
  let cnt0 = 0,
    cnt1 = 0,
    cnt2 = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) cnt0++;
    else if (arr[i] === 1) cnt1++;
    else cnt2++;
  }

  for (let i = 0; i < cnt0; i++) arr[i] = 0;
  for (let i = cnt0; i < cnt0 + cnt1; i++) arr[i] = 1;
  for (let i = cnt0 + cnt1; i < arr.length; i++) arr[i] = 2;
}

// optimal
function sortArray(arr) {
  let low = 0,
    mid = 0,
    high = arr.length - 1;

  while (mid <= high) {
    if (arr[mid] === 0) {
      [arr[low], arr[mid]] = [arr[mid], arr[low]];
      low++;
      mid++;
    } else if (arr[mid] === 1) {
      mid++;
    } else {
      [arr[mid], arr[high]] = [arr[high], arr[mid]];
      high--;
    }
  }
}
