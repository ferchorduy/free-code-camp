function mongoIDDate(id) {
    const hexNum = id.slice(0, 8)
    const decimalNum = parseInt(hexNum, 16) * 1000
    const date = new Date(decimalNum)
    return date.toISOString()
}

/* OTHER SOLUTIONS

function mongoIDDate(id) {
  return new Date((parseInt(id.slice(0,8),16)*1000)).toISOString();
}

*/

// Do not edit below this line
module.exports = mongoIDDate;