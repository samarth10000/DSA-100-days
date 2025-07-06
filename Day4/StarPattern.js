//Star Patterns For understanding Loop inside a loop

// *****
// *****
// *****
// *****

// So the i here is responsible for rows and j is responsible for coloums
let n = 5;
for (let i = 0; i < 6; i++) {
  let row = "";
  for (let j = 0; j < n; j++) {
    row = row + "*";
  }
  console.log(row);
}

// Que - 2
// *
// **
// ***
// ****
// *****

let n = 5;

for (let i = 0; i < n; i++) {
  let row = "";
  for (let j = 0; j < i + 1; j++) {
    row = row + "*";
  }
  console.log(row);
}

// Que - 3
// 1
// 12
// 123
// 1234
// 12345

// Ans -
let n = 5;

for (let i = 0; i < n; i++) {
  let row = "";
  for (let j = 1; j <= i + 1; j++) {
    row = row + j;
  }
  console.log(row);
}

// Que - 4
// 1
// 22
// 333
// 4444
// 55555

// Ans -
let n = 5;

for (let i = 1; i <= n; i++) {
  let row = "";
  for (let j = 0; j < i; j++) {
    row = row + i;
  }
  console.log(row);
}
