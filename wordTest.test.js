const wordTest = require('./wordTest');
const input = 'DFLJJOQWEFNADFONOQIWENFOIWNEFDNOKNQOWNEFOKD';

test('Outpout with 7 as size', () => {
  expect(wordTest.paragraph(input, 7)).toStrictEqual([
    'DFLJJOQ',
    'WEFNADF',
    'ONOQIWE',
    'NFOIWNE',
    'FDNOKNQ',
    'OWNEFOK',
    'D',
  ]);
});

test('Outpout with 5 as size', () => {
  expect(wordTest.paragraph(input, 5)).toStrictEqual([
    'DFLJJ',
    'OQWEF',
    'NADFO',
    'NOQIW',
    'ENFOI',
    'WNEFD',
    'NOKNQ',
    'OWNEF',
    'OKD',
  ]);
});

test('Outpout with 3 as size', () => {
  expect(wordTest.paragraph(input, 3)).toStrictEqual([
    'DFL',
    'JJO',
    'QWE',
    'FNA',
    'DFO',
    'NOQ',
    'IWE',
    'NFO',
    'IWN',
    'EFD',
    'NOK',
    'NQO',
    'WNE',
    'FOK',
    'D',
  ]);
});
