// Que - Second largest in an array
// ANS -
let arr = [4, 9, 0, 2, 8, 7, 1];

const Secondlargest = (arr) => {
  if (arr.length < 2) {
    return "Array should have atleast 2 elements ";
  }

  let largest = -Infinity;
  let secondLargest = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] > secondLargest && arr[i] !== largest) {
      secondLargest = arr[i];
    }
  }

  return secondLargest;
};

const second = Secondlargest(arr);
console.log(second);
