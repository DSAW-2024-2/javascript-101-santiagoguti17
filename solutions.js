// Sum of Two Numbers
function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    console.log('Los datos de entrada no son adecuados');
    return;
  }

  return a + b;
}

// Factorial of a Number
function factorial(n) {
  if (typeof n !== 'number') {
    console.log('Los datos de entrada no son adecuados');
    return;
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
  if (!Array.isArray(arr)) {
    console.log('Los datos de entrada no son adecuados');
    return;
  }

  if (arr.length === 0) {
    return null;
  }

  return Math.max(...arr);
}

// Count Vowels in a String
function countVowels(str) {
  if (typeof str !== 'string') {
    console.log('Los datos de entrada no son adecuados');
    return;
  }

  const vowels = 'aeiouAEIOU';
  let count = 0;

  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }

  return count;
}

// Check if a Number is Prime
function isPrime(n) {
  if (typeof n !== 'number') {
    console.log('Los datos de entrada no son adecuados');
    return;
  }

  if (n <= 1) {
    return false;
  }

  if (n <= 3) {
    return true;
  }

  if (n % 2 === 0 || n % 3 === 0) {
    return false;
  }

  let i = 5;
  while (i * i <= n) {
    if (n % i === 0 || n % (i + 2) === 0) {
      return false;
    }
    i += 6;
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
