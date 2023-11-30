const getBrand = (notebookName) => {
  const brand = notebookName.split(" ")[0];
  return brand;
}


const refactNotebookData = async (notebooks) => {
  notebooks.forEach((data) => {
    const marca = getBrand(data.title)
    console.log('Nome:', data.title);
    console.log('Descrição:', data.description);
    console.log('Preço:', data.price);
    console.log(`Marca: ${marca}`);
    console.log('-------------------------');
  });

}

module.exports = {
  refactNotebookData
}