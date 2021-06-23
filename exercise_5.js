/*Write a function that returns the sum of multiples of 3 and 5 between
0 and limit (parameter). For example, if limit is 20, it should return the sum of 3, 5, 6, 9, 10, 12, 15, 18, 20*/

function sum(limit) {
  let result = 0;
  for(let i = 0; i <= limit; i++){
    if(i % 3 === 0 || i % 5 === 0) {
      result += i;
    }
  }
  return result;
}

module.exports = sum;