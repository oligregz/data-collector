require('dotenv').config();

const express = require('express');
const { routes } = require('./routes');
const swaggerUI = require('swagger-ui-express');
const swaggerJson = require('../doc/schemas.json');

require('./database');

const app = express();

app.use(express.json());
app.use(routes);

app.use('/api/v1/docs', swaggerUI.serve, swaggerUI.setup(swaggerJson));

const PORT = process.env.NODE_LOCAL_PORT;

app.listen(PORT, () => console.log(`App running on port ${PORT}`));