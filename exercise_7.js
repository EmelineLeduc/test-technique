// Write a function that prints all the prime numbers between 0 and limit where limit is a parameter.

function primeNumber(limit) {
  return Array(limit)
    .fill()
    .map((x, i) => i)
    .filter((num) => {
      for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
      }
      return num !== 1;
    });
}

module.exports = primeNumber;
