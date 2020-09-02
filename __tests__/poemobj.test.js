import Poem from '../src/js/blscript.js';
describe ('Poem', () => {
  let haiku;

  beforeEach(() => {
    haiku = new Poem('hello','hi','hola');
  });
  
  test('should correctly create a poem object with three lines', () => {
    // const haiku = new Poem('hello','hi','hola');
    const allLines = (haiku.line1, haiku.line2, haiku.line3);    
    const equal = ('hello','hi','hola');
    expect(allLines).toEqual(equal);
  });

  test ('should correctly count the number of vowels in line1', () => {
    const line1 = haiku.line1;
    expect(haiku.countVowels(line1)).toEqual(2);
  });

  test ('should correctly count the number of vowels in line2', () => {
    const line2 = haiku.line2;
    expect(haiku.countVowels(line2)).toEqual(1);
  });

  test ('should correctly count the number of vowels in line3', () => {
    const line3 = haiku.line3;
    expect(haiku.countVowels(line3)).toEqual(2);
  });
});

