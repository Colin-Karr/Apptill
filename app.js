//Import express
const express = require("express");

//Create an instance of Express
const app = express();

//Listen for requests
app.listen(3000);

//Register ejs view engine
app.set("view engine", "ejs");

