//Star Patterns For understanding Loop inside a loop

// *****
// *****
// *****
// *****

// So the i here is responsible for rows and j is responsible for coloums
// let n = 5;
// for (let i = 0; i < 6; i++) {
//   let row = "";
//   for (let j = 0; j < n; j++) {
//     row = row + "*";
//   }
//   console.log(row);
// }

// Que - 2
// *
// **
// ***
// ****
// *****

// let n = 5;

// for (let i = 0; i < n; i++) {
//   let row = "";
//   for (let j = 0; j < i + 1; j++) {
//     row = row + "*";
//   }
//   console.log(row);
// }

// Que - 3
// 1
// 12
// 123
// 1234
// 12345

// Ans -
// let n = 5;

// for (let i = 0; i < n; i++) {
//   let row = "";
//   for (let j = 1; j <= i + 1; j++) {
//     row = row + j;
//   }
//   console.log(row);
// }

// Que - 4
// 1
// 22
// 333
// 4444
// 55555

// Ans -
// let n = 5;

// for (let i = 1; i <= n; i++) {
//   let row = "";
//   for (let j = 0; j < i; j++) {
//     row = row + i;
//   }
//   console.log(row);
// }

// Que -5
// 12345
// 1234
// 123
// 12
// 1

// Ans -
// let n = 5;
// for (let i = 0; i < n; i++) {
//   let row = "";
//   for (let j = 0; j < n - i; j++) {
//     row = row + (j + 1);
//   }
//   console.log(row);
// }

// Que - 6

// * * * * *
// * * * *
// * * *
// * *
// *
// let n = 5;

// for (let i = 0; i < n; i++) {
//   let row = "";
//   for (let j = 0; j < n - i; j++) {
//     row = row + "*";
//   }
//   console.log(row);
// }

//Que - 7

//     *
//    **
//   ***
//  ****
// *****

// let n = 5;

// for (i = 0; i < n; i++) {
//   let row = "";
//   for (let j = 0; j < n - (i + 1); j++) {
//     row = row + " ";
//   }
//   for (let k = 0; k < i + 1; k++) {
//     row = row + "*";
//   }
//   console.log(row);
// }

// Que - 8

// 1
// 10
// 101
// 1010
// 10101

// let n = 5;
// for (let i = 0; i < n; i++) {
//   let row = "";
//   let toggle = 1;
//   for (let j = 0; j < i + 1; j++) {
//     row = row + toggle;
//     if (toggle == 1) {
//       toggle = 0;
//     } else {
//       toggle = 1;
//     }
//   }
//   console.log(row);
// }

// Que - 8

// 1
// 10
// 101
// 1010
// 10101

// let n = 5;
// let toggle = 1;
// for (let i = 0; i < n; i++) {
//   let row = "";

//   for (let j = 0; j < i + 1; j++) {
//     row = row + toggle;
//     if (toggle == 1) {
//       toggle = 0;
//     } else {
//       toggle = 1;
//     }
//   }
//   console.log(row);
// }
