// Write a Question that returns the count of digits in a number

// function countDigit(n) {
//   let count = 0;
//   let num = n.toString();
//   let splittedString = num.split("");
//   count = splittedString.length;
//   return count;
// }

// let result = countDigit(3213945747545545);
// console.log(result);

// Methods
// Math.floor(); //take the base value from the point value example(45.1234)
// Math.round(); //it round off the value
// Math.ceil(); // it always round off to the highest

function CountDigits(n) {
  if (n == 0) {
    return 1;
  }

  // handle negative numbers
  n = Math.abs(n);

  let count = 0;
  while (n > 0) {
    n = Math.floor(n / 10);
    count = count + 1;
  }
  return count;
}

let Coount = CountDigits(-2345);
console.log(Coount);
