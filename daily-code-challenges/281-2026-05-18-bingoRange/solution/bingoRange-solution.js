function bingoRange(letter) {
  const numberRangeOfLetter = [];
    switch (letter) {
        case 'B':
          for (let i = 1; i <= 15; i++) numberRangeOfLetter.push(i);
          break;
        case 'I':
          for (let i = 16; i <= 30; i++) numberRangeOfLetter.push(i);
          break;
        case 'N':
          for (let i = 31; i <= 45; i++) numberRangeOfLetter.push(i);
          break;
        case 'G':
          for (let i = 46; i <= 60; i++) numberRangeOfLetter.push(i);
          break;
        case 'O':
          for (let i = 61; i <= 75; i++) numberRangeOfLetter.push(i);
          break;
        default:
          return []; // invalid letter
    }
    return numberRangeOfLetter;
}

/* OTHER SOLUTIONS

function bingoRange(letter) {
  const ranges = {
    B: [1, 15],
    I: [16, 30],
    N: [31, 45],
    G: [46, 60],
    O: [61, 75]
  };
  
  if (!ranges[letter]) return [];
  
  const [start, end] = ranges[letter];
  const numArray = [];
  for (let i = start; i <= end; i++) numArray.push(i);
  return numArray;
}


function bingoRange(letter) {
  const [start, end] = ranges[letter];
  return Array.from({ length: end - start + 1 }, (_, i) => start + i);
}

*/

// Do not edit below this line
module.exports = bingoRange;