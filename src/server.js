require('dotenv').config();

const express = require('express');
const { routes } = require('./routes');

require('./database');

const app = express();

app.use(express.json());
app.use(routes);

const PORT = process.env.NODE_LOCAL_PORT; 

app.listen(PORT, () => console.log(`App running on port ${PORT}`));