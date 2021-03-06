var express = require("express");
var bodyParser = require("body-parser");

var app = express();

var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use(express.static('images'));

require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes.js")(app);

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});
