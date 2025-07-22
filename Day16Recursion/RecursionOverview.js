// function fun(num) {
//   if (num == 0) {
//     return;
//   }
//   console.log(num);
//   num = num - 1;
//   fun(num);
// }
// let a = 10;
// fun(a);
let n = 10;
function func(x) {
  if (x > n) {
    return "Done";
  }
  console.log(x);
  x = x + 1;
  return func(x);
}

const response = func(1);
console.log(response);
