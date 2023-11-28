const express = require('express');
const { routes } = require('./routes');

const app = express();

app.use(express.json());
app.use(routes);

const PORT = process.env.PORT || 3399; 

app.listen(PORT, () => console.log(`App running on port ${PORT}`));