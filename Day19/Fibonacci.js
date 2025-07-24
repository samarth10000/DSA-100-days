// iterative approach

const fibo = (n) => {
  if (n == 0) return 0;
  if (n == 1) return 1;
  let first = 0;
  let second = 1;
  for (let i = 2; i <= n; i++) {
    let next = first + second;
    first = second;
    second = next;
  }
  return second;
};

console.log(fibo(5));

const fibonacci = (n) => {
  if (n <= 1) {
    return n;
  }

  return fibonacci(n - 1) + fibonacci(n - 2);
};

console.log(fibonacci(5));
