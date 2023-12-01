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

const getName = (description) => {
  const name = description.split(',')[0];
  return name;
}

const changePriceForNumber = (stringPrice) => {
  const onlyStringprice = stringPrice.slice(1);
  const numberPrice = parseFloat(onlyStringprice).toFixed(2);

  return numberPrice;
}

const refactNotebookData = async (notebooks) => {
  const filteredNotebooks = notebooks
    .filter((data) => {
      const isValid = validateBrand(data.description)
      return isValid;
    })
    .map((data) => {
      changePriceForNumber(data.price)
      return {
        name: getName(data.description),
        price: changePriceForNumber(data.price),
        description: data.description,
      };
    });

  return filteredNotebooks;
};


module.exports = {
  refactNotebookData
}