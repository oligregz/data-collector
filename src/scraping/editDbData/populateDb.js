const { searchAndListDetails } = require('../scraper');
const { createNotebook } = require('../services/index')

const addsNotebooks = async () => {
  try {
    const notebooks = await searchAndListDetails();
    const notebooksAddedInDb = await notebooks.forEach( async (notebook) => {
      const notebookAdded = await createNotebook(notebook);

      return notebookAdded;
    });
    
  } catch (e) {
    console.error(e);
  }
}

addsNotebooks();