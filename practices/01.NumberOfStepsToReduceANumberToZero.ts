// @see: https://leetcode.com/problems/number-of-steps-to-reduce-a-number-to-zero/
// Given a non-negative integer num, return the number of steps to reduce it to zero.
// If the current number is even, you have to divide it by 2, otherwise, you have to subtract 1 from it.

// Input: num = 14
// Output: 6
// Explanation:
//   Step 1) 14 is even; divide by 2 and obtain 7.
// Step 2) 7 is odd; subtract 1 and obtain 6.
// Step 3) 6 is even; divide by 2 and obtain 3.
// Step 4) 3 is odd; subtract 1 and obtain 2.
// Step 5) 2 is even; divide by 2 and obtain 1.
// Step 6) 1 is odd; subtract 1 and obtain 0.
// const numberOfSteps = (num: number, count: number = 0): number => {
//   if (num <= 0) {return count;}
//   count++;
//   return num % 2 === 0 ? numberOfSteps(num / 2, count) : numberOfSteps(num - 1, count);
// };

const numberOfSteps = (num: number) => {
  let count = 0;
  while (num > 0) {
    count++;
    num = num % 2 === 0 ? num / 2 : num - 1;
  }
  return count;
};

console.log(numberOfSteps(14));
console.log(numberOfSteps(8));
