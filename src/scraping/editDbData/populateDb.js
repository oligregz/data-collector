const { searchAndListDetails } = require('../scraper');

const addsNotebooks = async () => {
  try {
    const notebooks = await searchAndListDetails();
    console.log(notebooks);
  } catch (e) {
    console.error(e);
  }
}

addsNotebooks();