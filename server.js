const express = require('express');

const burger_controller = require('./controllers/burgers_controller');

var PORT = process.env.PORT || 8080;

var app = express();

app.use(express.static(__dirname + '/public'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

burger_controller(app);

app.listen(PORT, function() {

  console.log("Server listening on: http://localhost:" + PORT);
});