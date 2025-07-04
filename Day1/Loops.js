for (let i = 0; i < 10; i++) {
  console.log("Hello world ");
}

for (let i = 2; i < 9; i++) {
  console.log("HW");
}

// Reverse of Loops
for (let i = 5; i > 0; i--) {
  console.log("Hello world " + i);
}

// Infinite Loop
//this is an infinite loop it will hand your browser

for (let i = 1; i > 0; i++) {
  console.log("hello world ");
}

// calling a function inside a loop

function greet() {
  console.log("Namaste World");
}

for (let i = 0; i < 10; i++) {
  greet();
}

// array with loops

let arr = [2, 3, 4, 5, 6, 7, 8, 9];
let length = arr.length;

for (let i = 0; i < length; i++) {
  console.log(arr[i]);
}

// All the even numbers
let arr1 = [2, 3, 4, 5, 6, 7, 8, 9];
let arrlength = arr.length;

for (let i = 0; i < length; i++) {
  if (arr1[i] % 2 == 0) {
    console.log(arr[i]);
  }
}

// -------------WHILE LOOP-----------------

let i = 0;
while (i <= 5) {
  console.log("Hello world ");
  i++;
}
