//write a function that searches for an element in an array and returns the index , if the element is not present then just return -1

let arr1 = [4, 2, 0, 20, 8, 30];
function FindElement(arr1, target) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] === target) {
      return i;
    }
  }
  return -1;
}

let index = FindElement(arr1, 20);
console.log(index);

// write a function that returns a number of negative numbers in an array

let arr2 = [2, -9, 17, 0, 1, -10, -2, -4];

function CountNegative(arr2) {
  let count = 0;
  for (let i = 0; i < arr2.length; i++) {
    if (arr2[i] < 0) {
      count = count + 1;
    }
  }
  return count;
}

let NegativeNumbers = CountNegative(arr2);
console.log(NegativeNumbers);

//write a function that returns the largest number in an array

let arr3 = [4, 14, 35, 67, 89, 90];
// -Infinity is the smallest number in the world even it will defenitely not present in the array
function LargestNumber(arr3) {
  let largest = -Infinity;
  for (let i = 0; i < arr3.length; i++) {
    if (largest < arr3[i]) {
      largest = arr3[i];
    }
  }
  return largest;
}

let large = LargestNumber(arr3);
console.log(large);

// Find the Smallest number in the array

let arr4 = [4, 14, 35, 67, 89, 90];

function Smallest(arr4) {
  let smallest = +Infinity;
  for (let i = 0; i < arr4.length; i++) {
    if (smallest > arr3[i]) {
      smallest = arr3[i];
    }
  }
  return smallest;
}

let small = Smallest(arr3);
console.log(small);
