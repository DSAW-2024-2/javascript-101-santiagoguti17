// Sum of Two Numbers
function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Both arguments must be numbers');
  }
  return a + b;
}

// Factorial of a Number
function factorial(n) {
  if (typeof n !== 'number' || n < 0) {
    throw new Error('The argument must be a non-negative number');
  }

  if (n === 0) {
    return 1;
  }

  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }

  return result;
}

// Find the Largest Number
function findLargest(arr) {
  if (!Array.isArray(arr) || arr.length === 0) {
    throw new Error('The argument must be a non-empty array');
  }

  let largest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }

  return largest;
}

// Count Vowels in a String
function countVowels(str) {
  if (typeof str !== 'string') {
    throw new Error('The argument must be a string');
  }

  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let count = 0;
  for (let char of str) {
    if (vowels.includes(char.toLowerCase())) {
      count++;
    }
  }

  return count;
}

// Check if a Number is Prime
function isPrime(n) {
  if (typeof n !== 'number' || n <= 1) {
    throw new Error('The argument must be a number greater than 1');
  }

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}

module.exports = {
  sum,
  factorial,
  findLargest,
  countVowels,
  isPrime,
};
