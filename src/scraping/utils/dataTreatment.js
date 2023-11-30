const getBrand = (notebookName) => {
  const brand = notebookName.split(" ")[0];
  return brand;
}

const validateBrand = (title) => {
  const brand = getBrand(title);
  if(brand != 'Lenovo') {
    return false;
  }

  return true;
}

const refactNotebookData = async (notebooks) => {
  const filteredNotebooks = notebooks
    .filter((data) => {
      return validateBrand(data.title);
    })
    .map((data) => {
      return {
        name: data.title,
        price: data.price,
        description: data.description,
      };
    });

  return filteredNotebooks;
};


module.exports = {
  refactNotebookData
}