//Import express, morgan, mongoose, blogRoutes
const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
//const blogRoutes = require("./routes/blogRoutes");
const { result } = require("lodash");

//Create an instance of Express
const app = express();

//Connect to mongo db using mongoose
//Cluster: nodePractice
//Datatbse name: Info
//Collections: posts

//Store db link in variable dbURI
const dbURI =
  "mongodb+srv://col:success7@nodepractice.p2cis.mongodb.net/?retryWrites=true&w=majority&appName=nodePractice";

mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => console.log("Connected to database"), app.listen(4000))
  .catch((err) => console.log(err));

//Register ejs view engine
app.set("view engine", "ejs");

//Middleware
//Use express static for making static files
//like images and css public
app.use(express.static("public"));

//Take all the data from the urls and pass
//to express object
app.use(express.urlencoded({ entended: true }));

//Invoke morgan (logger)
app.use(morgan("dev"));

//Send pages that were requested

//Basic routes
//Homepage: redirect to blog page
app.get("/", (req, res) => {
  res.redirect("/blogs");
});
