let arr = [4, 5, 6, 8, 9, 0];

const LinearSearch = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }

  return -1;
};

console.log(LinearSearch(arr, 9));
