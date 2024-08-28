//Import express, morgan, mongoose, blogRoutes
const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const postRoutes = require("./routes/postRoutes");
const { result } = require("lodash");

//Create an instance of Express
const app = express();

//Connect to mongo db using mongoose
//Cluster: nodePractice
//Datatbse name: Info
//Collections: posts

//Store db link in variable dbURI
const dbURI =
  "mongodb+srv://col:success7@nodepractice.p2cis.mongodb.net/Info?retryWrites=true&w=majority&appName=nodePractice";

mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => console.log("Connected to database"), app.listen(8080))
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

//Homepage: redirect to post page
app.get("/", (req, res) => {
  res.redirect("/posts");
});

//About page
app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});

//Contacts page
app.get("/contacts", (req, res) => {
  res.render("contacts", { title: "Contacts" });
});

//post routes
//Scope '/posts' which can now be removed in postRoutes
//Middleware: "use"
app.use("/posts", postRoutes);

//404 page (Middleware "use")
app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});
