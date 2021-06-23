/*Write a function called fozz_bezz that takes a number.
○ If the number is divisible by 3, it should return “Fozz”.
○ If it is divisible by 5, it should return “Bezz”.
○ If it is divisible by both 3 and 5, it should return “FozzBezz”.
○ Otherwise, it should return the same number.*/

function fozz_bezz(number) {
  if(number % 3 === 0 && number % 5 === 0) return "FozzBezz";
  else if(number % 3 === 0) return "Fozz";
  else if(number % 5 === 0) return "Bezz";
  else return number;
}

module.exports = fozz_bezz;