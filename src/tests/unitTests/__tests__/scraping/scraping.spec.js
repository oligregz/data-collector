const { searchAndListDetails } = require('../../../../scraping/scraper');

let result;

describe('Scraping tests:', () => {
  beforeEach(async () => {
    result = await searchAndListDetails();
  }, 60000);

  test('1 - Return type', () => {
    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBeGreaterThan(0);
  });

  test('2 - Check properties of items', () => {
    const firstItem = result[0];
    expect(firstItem).toHaveProperty('name');
    expect(firstItem).toHaveProperty('price');
    expect(firstItem).toHaveProperty('description');
  });

});

afterAll(() => {});
