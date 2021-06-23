/*Write a function called show_stars(rows). If rows are 5, it should print the following:
○ *
○ **
○ ***
○ ****
○ ***** */

function show_stars(rows) {
  const result = [];
  for (let i = 1; i <= rows; i++) {
    result.push("*".repeat(i));
  }
  return result;
}

module.exports = show_stars;
