const express = require('express');
const util = require('util');

const burger_controller = require('./controllers/burgers_controller');

const PORT = process.env.PORT || 8080;

const app = express();

const burger = require('./public/assets/js/burgers');

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

burger_controller(app);

app.listen(PORT, function() {

  console.log("Server listening on: http://localhost:" + PORT);
});