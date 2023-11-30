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
  notebooks.forEach((data) => {
    const isLenovo = validateBrand(data.title);
    if (isLenovo) {
      console.log('Nome:', data.title);
      console.log('Descrição:', data.description);
      console.log('Preço:', data.price);
      console.log('-------------------------');
    }
  });

}

module.exports = {
  refactNotebookData
}