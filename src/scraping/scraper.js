const puppeteer = require("puppeteer");
const { listNotebooks } = require('./services/index');

const extractDataFromPage = async (page) => {
  await page.waitForSelector(".col-md-4.col-xl-4.col-lg-4");

  const extractedData = await page.evaluate(() => {
    const divSelector = ".col-md-4.col-xl-4.col-lg-4";
    const divs = Array.from(document.querySelectorAll(divSelector));

    const extractedInfo = divs.map((div) => {
      const title = div.querySelector("a.title").textContent.trim();
      const description = div.querySelector("p.description").textContent.trim();
      const price = div.querySelector("h4.price").textContent.trim();

      return {
        title,
        description,
        price,
      };
    });

    return extractedInfo;
  });

  return extractedData;
};

const searchAndListDetails = async () => {
  try {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();

    await page.goto(
      "https://webscraper.io/test-sites/e-commerce/allinone/computers/laptops"
    );
    await page.setViewport({ width: 1080, height: 1024 });

    const extractedData = await extractDataFromPage(page);

    // console.log('Detalhes de cada div:');
    // extractedData.forEach((data, index) => {
    //   console.log(`Div ${index + 1}:`);
    //   console.log('Nome:', data.title);
    //   console.log('Descrição:', data.description);
    //   console.log('Preço:', data.price);
    //   console.log('-------------------------');
    // });

    const list = await listNotebooks();
    console.log("LIST_________", list);

    await browser.close();
  } catch (e) {
    console.error(e);
  }
};

searchAndListDetails();
