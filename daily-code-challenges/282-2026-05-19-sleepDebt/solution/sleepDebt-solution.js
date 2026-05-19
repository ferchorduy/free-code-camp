function sleepDebt(hoursSlept, targetHours) {
  const totalHoursSlept = hoursSlept.reduce((acc, curr) => acc + curr, 0);
  const totalTargetHoursAfterTonight = (targetHours * hoursSlept.length) + targetHours;
  const totalSleepDebt = totalTargetHoursAfterTonight - totalHoursSlept;
  if (totalSleepDebt < 0) return 0;
  return totalSleepDebt;
}

/* OTHER SOLUTIONS

function sleepDebt(hoursSlept, targetHours) {
  const totalSleepDebt = (targetHours * (hoursSlept.length + 1)) - hoursSlept.reduce((acc, curr) => acc + curr, 0);
  return Math.max(0, totalSleepDebt);    // return totalSleepDebt < 0 ? 0 : totalSleepDebt; (can also return this ternary expression)
}

*/

// Do not edit below this line
module.exports = sleepDebt;
