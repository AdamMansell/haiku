import { Poem, sylCount, fiveSyl, sevenSyl } from '../src/js/blscript.js';
describe('Poem', () => {
  let haiku;

  beforeEach(() => {
    haiku = new Poem('hello', 'hi', 'hola');
  });

  test('should correctly create a poem object with three lines', () => {
    // const haiku = new Poem('hello','hi','hola');
    const allLines = (haiku.line1, haiku.line2, haiku.line3);
    const equal = ('hello', 'hi', 'hola');
    expect(allLines).toEqual(equal);
  });

  test('should correctly count the number of vowels in line1', () => {
    const line1 = haiku.line1;
    expect(haiku.countVowels(line1)).toEqual(2);
  });

  test('should correctly count the number of vowels in line2', () => {
    const line2 = haiku.line2;
    expect(haiku.countVowels(line2)).toEqual(1);
  });

  test('should correctly count the number of vowels in line3', () => {
    const line3 = haiku.line3;
    expect(haiku.countVowels(line3)).toEqual(2);
  });
});


describe('Poem', () => {
  let haiku;

  beforeEach(() => {
    haiku = new Poem('Have a great day in the cave', 'hi', 'hola');
  });

  test("should find words with a silent 'e' at the end, and count them", () => {
    const line1 = (haiku.line1);
    expect(haiku.countSilentE(line1)).toEqual(2);
  });
});


describe('Poem', () => {
  let haiku;

  beforeEach(() => {
    haiku = new Poem('point to the straw', 'hi', 'hola');
  });

  test("should correctly count the number of diphthongs is a string", () => {
    const line1 = (haiku.line1);
    expect(haiku.countDiph(line1)).toEqual(2);
  });

});

describe('Syllable count function', () => {

  test("should correctly return the total number of vowels minus silent e's and diphthongs", () => {
    expect(sylCount(5, 2, 1)).toEqual(2);

  });
});


describe('five syllable function', () => {

  test("should correctly check if line contains exactly 5 syllables, if true should return true", () => {
    let poem = new Poem("The dog ate his food", "The cat did not eat her food", "The cat ate her food");
    expect(fiveSyl(poem, "The dog ate his food")).toEqual(true);
  });
});

describe('seven syllable function', () => {

  test("should correctly check if line contains exactly 7 syllables, if true should return true", () => {
    let poem = new Poem("The dog ate his food", "The cat did not eat her food", "The cat ate her food");
    expect(sevenSyl(poem, "The cat did not eat her food")).toEqual(true);
  });
});