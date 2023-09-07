require('dotenv').config();
require('express-async-errors');
const express = require('express');
const routes = require('./routes');
const cors = require('./app/middlewares/cors');
const errorHandle = require('./app/middlewares/errorHandle');

const app = express();

app.use(express.json());
app.use(cors);
app.use(routes);
app.use(errorHandle);

module.exports = app;
