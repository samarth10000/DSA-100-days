// 🧠 What are Time and Space Complexity?
// When you write code to solve a problem (like sorting numbers, searching for something in a list, or reversing a string), the computer takes time to run it and uses memory (space) to store data during execution.

// Time Complexity = how fast your code runs

// Space Complexity = how much memory your code uses

// These are measured using Big-O Notation.

// 📘 Big-O Notation (Simple Explanation)
// Big-O is like a math way of describing how your code behaves as the input size increases.

// Let’s say:

// let arr = [1, 2, 3, 4, 5]; // this has 5 elements
// If your code works well for 5 numbers, what if there are 5 million numbers? That’s where Time & Space Complexity matter.

// 🕒 Time Complexity
// 💡 Think: "How many steps does it take?"
// Example 1:

// console.log(arr[0]); // Access first element
// Only 1 step — no matter if array has 5 or 5 million elements.

// 👉 Time Complexity: O(1) (Constant Time)

// Example 2:

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }
// You’re going through every item in the array — if there are n elements, you do n steps.

// 👉 Time Complexity: O(n) (Linear Time)

// ⚡ Common Time Complexities
// Complexity	Meaning	Example
// O(1)	Constant time	Accessing arr[0]
// O(n)	Linear time	Looping through an array
// O(n²)	Quadratic time	Nested loops (e.g., comparing every element with every other)
// O(log n)	Logarithmic time	Binary Search
// O(n log n)	Linearithmic (Fast sorting)	Merge Sort, Quick Sort (avg)

// 🧊 Space Complexity
// 💡 Think: "How much extra memory is used?"
// Example 1:

// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//   sum += arr[i];
// }
// You're only using one variable (sum) no matter how big the array is.

// 👉 Space Complexity: O(1)

// Example 2:

// let newArr = [];
// for (let i = 0; i < arr.length; i++) {
//   newArr.push(arr[i] * 2);
// }
// You're creating a new array of size n.

// 👉 Space Complexity: O(n)

// 🔄 Real World Analogy
// 🕒 Time Complexity
// Imagine you're in a queue at a restaurant:

// If the chef only serves you, that’s O(1).

// If the chef serves each customer, that’s O(n).

// If every customer shakes hands with every other customer — that’s O(n²).

// 🧊 Space Complexity
// Imagine you're carrying books:

// If you carry 1 book, it's O(1).

// If every person gets their own bag, space grows with O(n).

// Complexity	Description	Example
// Time: O(1)	Constant — same steps every time	arr[0]
// Time: O(n)	Linear — steps grow with input	Loop through arr
// Time: O(n²)	Quadratic — nested loops	Bubble sort
// Space: O(1)	Constant — fixed extra memory used	Just a sum variable
// Space: O(n)	Linear — space grows with input	Creating a new array

// 🎓 Final Tip for Beginners
// Don't overthink Big-O at the start.

// Focus on understanding how loops, function calls, and data structures affect performance.

// Slowly start analyzing: "If my input doubles, will time/space double, triple, or explode?"
