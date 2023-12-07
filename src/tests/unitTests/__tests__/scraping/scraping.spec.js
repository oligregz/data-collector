const {
  searchAndListDetails,
} = require('../../../../scraping/scraper');

const tenSeconds = 10000;
let result;

beforeAll(async () => {
  result = await searchAndListDetails();
})

describe('Scraping tests:', () => {
  test('1 - Return type', async () => {
    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBeGreaterThan(0);
  }, tenSeconds);

  test('2 - Check properties of items', async () => {
    const firstItem = result[0];
    expect(firstItem).toHaveProperty('name');
    expect(firstItem).toHaveProperty('price');
    expect(firstItem).toHaveProperty('description');
  });

});

afterAll(() => {
  
});