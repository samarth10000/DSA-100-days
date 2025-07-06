console.log("hello world ");

const a = 20;
const b = 12;

const sum = a + b;
console.log(sum);

const minus = a - b;
console.log(minus);

let firstname = "Samarth";
let lastname = "Saxena";

let fullName = firstname + " " + lastname;
console.log(fullName);

let arr = [4, 5, 6, 7, 8];
console.log(arr[4]);
let arr1 = ["Samarth", "Sanskar", "Sameer", "Jerry"];
console.log(arr1[3]);

let arr2 = [4, 5, [6, 7, 8]];
console.log(arr2[2]);

let arr3 = [4, 5, [6, 7, 8]];
console.log(arr2[2][1]);

let arr4 = [4, 5, [6, 7, 8, [2, 3, 4]]];
console.log(arr4[2][3][1]);

// Objects

let obj = {
  firstname: "Samarth ",
  lastname: "Saxena",
  bool: true,
  arr: [2, 3, 4],
};

console.log(obj.arr);
console.log(obj.firstname + obj.lastname);

// Functions And Conditional Statements

function Helloworld() {
  console.log("Hello World ");
}

Helloworld();

function greet(name) {
  console.log("Namaste " + name);
}

greet("samarth");

function square(x) {
  let square = x * x;
  return square;
}

let value = square(3);
console.log(value);

// If Else / Conditional Statement
function Eligibletovote(age) {
  if (age < 0) {
    console.log(" Invalid Input ");
  } else if (age > 18) {
    console.log("Yes you are ellegible to vote");
  } else {
    console.log("you are not elegible to vote ");
  }
}

Eligibletovote(0);
