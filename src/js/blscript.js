// Write a function that correctly verifies that there are three lines to the poem//

export default class Poem {
  constructor(line1, line2, line3) {
    this.line1 = line1;
    this.line2 = line2;
    this.line3 = line3;
  }



  countVowels(line) {
    let vowNum = 0;
    let wordArray = line.trim().split(" ");
    for (let i = 0; i < wordArray.length; i++) {
      for (let j = 0; j < wordArray[i].length; j++) {
        if (wordArray[i][j] === 'a' || wordArray[i][j] === 'e' || wordArray[i][j] === 'i' || wordArray[i][j] === 'o' || wordArray[i][j] === 'u') {
          vowNum += 1;
          console.log('vowNum: ', vowNum);
        }
      }
    }
    return vowNum;
  }

  countSilentE(line) {
    let silentENum = 0;
    let wordArray = line.trim().split(" ");
    for (let i = 0; i < wordArray.length; i++) {
      if (wordArray[i].endsWith('e')) {
        silentENum += 1;
      }
    }
    return silentENum;
  }














































































































































