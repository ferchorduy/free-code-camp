function bingoRange(letter) {
  const numberRangeOfLetter = []
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

// Do not edit below this line
module.exports = bingoRange;