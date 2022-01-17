// fib(4) // 3
// fib(10) // 55
// fib(28) // 317811
// fib(35) // 9227465

// function fib(num) {
//   let count = 2;
//   let first = 1;
//   let fibSum = 1;
//   if (num < 3) return 1;

//   function runFib(currentSum, previous) {
//     if (count >= num) return currentSum;
//     const temp = currentSum;
//     currentSum = currentSum + previous;
//     previous = temp;
//     count++;

//     return runFib(currentSum, previous);
//   }

//   fibSum = runFib(fibSum, first);

//   return fibSum;
// }

function fib(n) {
  return n < 2 ? n : fib(n - 1) + fib(n - 2);
}
fib(28); //?
