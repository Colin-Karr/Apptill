const Post = require("../models/post");

//post_index, post_details, post_create_get,
// post_create_post, post_delete

//Sort posts from most recent first
const post_index = (req, res) => {
  Post.find()
    .sort({ createdAt: -1 })
    .then((result) => {
      res.render("posts/index", { title: "All posts", posts: result });
    })
    .catch((err) => {
      console.log(err);
    });
};

//Find details for posts
const post_details = (req, res) => {
  const id = req.params.id;
  Post.findById(id)
    .then((result) => {
      res.render("posts/details", { post: result, title: "Post Details" });
    })
    .catch((err) => {
      res.status(404).render("404", { title: "Post not found!" });
    });
};

const post_create_get = (req, res) => {
  res.render("posts/create", { title: "New Post" });
};

const post_create_post = (req, res) => {
  const post = new Post(req.body);

  post
    .save()
    .then((result) => {
      res.redirect("/posts");
    })
    .catch((err) => {
      console.log(err);
    });
};

const post_delete = (req, res) => {
  const id = req.params.id;
  Post.findByIdAndDelete(id)
    .then((result) => {
      res.json({ redirect: "/posts" });
    })
    .catch((err) => {
      console.log(err);
    });
};

//Export post controller
module.exports = {
  post_index,
  post_details,
  post_create_get,
  post_create_post,
  post_delete,
};
