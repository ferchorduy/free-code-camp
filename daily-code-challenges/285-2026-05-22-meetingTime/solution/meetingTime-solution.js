function meetingTime(availability) {
 const availabilities = [...availability];

  let firstFreeHour = 0;
  let startingHour = 0;
  let endingHour = 0;
  let difference = 0;

  for (const person of availabilities) {
    for (let i = 0; i < 2; i++) {
      startingHour = person[i][0];
      endingHour = person[i][1];
      difference = endingHour - startingHour;

      if (person[i][0] > startingHour) {
        startingHour = person[i][0];
      }
    }

      for (const hour of availWindow) {

      }
  }


  return firstFreeHour[0];
}

/* OTHER SOLUTIONS

*/

// Do not edit below this line
module.exports = meetingTime;
