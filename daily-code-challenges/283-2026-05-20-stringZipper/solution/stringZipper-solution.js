function stringZipper(firstString, secondString) {
  let newWord = '';
  let longerWord = firstString.length > secondString.length ? firstString : secondString;
  let i = 0;

  while (i < Math.min(firstString.length, secondString.length)) {
    newWord += firstString[i] + secondString[i];
    i++;
  }

  newWord += longerWord.slice(i, longerWord.length)

  return newWord;
}

/* OTHER SOLUTIONS

*/

// Do not edit below this line
module.exports = stringZipper;
