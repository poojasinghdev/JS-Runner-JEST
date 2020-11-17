const filterByTerm = require('../src/filterByTerm');
describe('Filter function', () => {
  const input = [
    { id: 1, url: 'https://www.url1.dev' },
    { id: 2, url: 'https://www.url2.dev' },
    { id: 3, url: 'https://www.link3.dev' }
  ];
  test('it should filter by a search term (link)', () => {
    let output = [{ id: 3, url: 'https://www.link3.dev' }];
    expect(filterByTerm(input, 'link')).toEqual(output);
  });
  test('it should filter by a search term (3)', () => {
    let output = [{ id: 3, url: 'https://www.link3.dev' }];
    expect(filterByTerm(input, '3')).toEqual(output);
  });
  test('it should filter by a search term (uRl)', () => {
    let output = [
      { id: 1, url: 'https://www.url1.dev' },
      { id: 2, url: 'https://www.url2.dev' }
    ];
    expect(filterByTerm(input, 'uRL')).toEqual(output);
  });
 
});
