const express = require('express');
const routes = require('./routes');
const cors = require('cors');
const { errors } = require('celebrate');
const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('../swagger_output.json');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());
app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile));

module.exports = app;