function iBeforeE(string) {

  const strArr = string.split(" ")
  const newString = strArr.map(word => {
    let wordArr = word.split("");
    for (let i = 0; i < wordArr.length; i++) {
      if (wordArr[i] === 'c' && wordArr[i+1] === 'i' && wordArr[i+2] === 'e') {
        wordArr[i+1] = 'e';
        wordArr[i+2] = 'i';
      }
      if (wordArr[i-1] !== 'c' && wordArr[i] === 'e' && wordArr[i+1] === 'i') {
        wordArr[i] = 'i';
        wordArr[i+1] = 'e';
      }
    }
    return wordArr.join("");
  });
  
  return newString.join(" ");
}

/* OTHER SOLUTIONS

*/

// Do not edit below this line
module.exports = iBeforeE;
