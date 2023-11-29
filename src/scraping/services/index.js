const axios = require('axios');

const createNotebook = async (notebook) => {

  const url = `http://localhost:3399/notebooks`;

  try {
    const res = await axios.post(url, notebook);
    
    console.log(res.data);
    return res.data;

  } catch (e) {
    console.error(e);
    throw new Error(e);
  }
}

const listNotebooks = async () => {

  const url = `http://localhost:3399/notebooks`;

  try {
    const res = await axios.get(url);
    
    console.log(res.data);
    return res.data;

  } catch (e) {
    console.error(e);
    throw new Error(e);
  }
}

module.export = {
  createNotebook,
  listNotebooks
}