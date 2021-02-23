const express = require('express');
const exphbs = require('express-handlebars');
const routes = require('./controllers/burgers_controller');

const PORT = process.env || 8080;

const app = express();