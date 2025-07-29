//  Longest Subarray With Sum = K
// Super BruteForce
for (let i = 0; i < n; i++) {
  for (let j = i; j < n; j++) {
    let sum = 0;

    for (let x = i; x <= j; x++) {
      sum += arr[x];
    }

    if (sum === k) {
      let currLen = j - i + 1;
      maxLen = Math.max(maxLen, currLen);
    }
  }
}

// TC-O(n cube)

// Better Bruteforce
function improvedBruteForce(arr, k) {
  let maxLen = 0;
  let n = arr.length;

  for (let i = 0; i < n; i++) {
    let sum = 0; // fresh sum for subarray starting at i

    for (let j = i; j < n; j++) {
      sum += arr[j]; // keep extending the subarray

      if (sum === k) {
        let len = j - i + 1;
        maxLen = Math.max(maxLen, len);
      }
    }
  }

  return maxLen;
}
//TC- O(nSqaure)

// Better coming
//Optimal coming
