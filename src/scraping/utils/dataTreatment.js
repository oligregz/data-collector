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

const changePriceForNumber = (stringPrice) => {
  const onlyStringprice = stringPrice.slice(1);
  const numberPrice = parseFloat(onlyStringprice).toFixed(2);

  console.log(`________${numberPrice}________`);
}

const refactNotebookData = async (notebooks) => {
  const filteredNotebooks = notebooks
    .filter((data) => {
      return validateBrand(data.title);
    })
    .map((data) => {
      changePriceForNumber(data.price)
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