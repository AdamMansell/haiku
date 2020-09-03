// Write a function that correctly verifies that there are three lines to the poem//

export class Poem {
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
        }
      }
    }
    return vowNum;
  }

  countSilentE(line) {
    let silentENum = 0;
    let wordArray = line.trim().split(" ");
    for (let i = 0; i < wordArray.length; i++) {
      if (wordArray[i].endsWith('e') && wordArray[i].match(/[aiou]/)) {
        silentENum += 1;
      }
    }
    return silentENum;
  }

  countDiph(line) {
    let diphCount = 0;
    let wordArray = line.trim().split(" ");
    for (let i = 0; i < wordArray.length; i++) {
      if (wordArray[i].includes("ou") || wordArray[i].includes("oi") || wordArray[i].includes("oo") || wordArray[i].includes("ea") || wordArray[i].includes("ee") || wordArray[i].includes("ai") || wordArray[i].includes("aw") || wordArray[i].includes("au") || wordArray[i].includes("aw") || wordArray[i].includes("ow") || wordArray[i].includes("oy")) {
        diphCount += 1;
      }
    }
    return diphCount;
  }

  // function that returns countVowels(line) - countDiph(line) - countSilentE(line);
  //if number is <= 0, then return 1; //

}

export function sylCount(count1, count2, count3) {
  let num = count1 - count2 - count3;
  // if (num <= 0 ) {
  //   return num = 1;
  // }
  return num;
}

//function to check if lines 1 and 3 are 5 syllables//
export function fiveSyl(poem, line) {

  let vow1Count = poem.countVowels(line);
  let e1Count = poem.countSilentE(line);
  let diph1Count = poem.countDiph(line);
  let line1syls = sylCount(vow1Count, e1Count, diph1Count);
  console.log(line1syls);
  line1syls == 5 ? line1syls = true : line1syls = false;
  return (line1syls);
}

//function to check if line 2 is 7 syllables//
export function sevenSyl(poem, line2) {
  let vow2Count = poem.countVowels(line2);
  let e2Count = poem.countSilentE(line2);
  let diph2Count = poem.countDiph(line2);
  let line2Syls = sylCount(vow2Count, e2Count, diph2Count);
  line2Syls == 7 ? line2Syls = true : line2Syls = false;
  return (line2Syls);
}

//function to check
