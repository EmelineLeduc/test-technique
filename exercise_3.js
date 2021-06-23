/*Write a function to check the speed of drivers. This function should have one parameter: speed.
○ If speed is less than 80, it should print “Ok”.
○ Otherwise, for every 4km/h above the speed limit (80), it should give the driver one demerit point and print the total number of demerit points. For example, if the speed is 90, it should print: “Points: 2”.
○ If the driver gets more than 12 points, the function should print: “License suspende*/

function speedLimit(speed) {
  if(speed <= 80) {
    return 'Ok';
  } else if(speed > 80) {
    const points = Math.floor((speed - 80) / 4);
    return points < 12 ? `Points: ${points}` : 'License suspended';
  }
}

module.exports = speedLimit;