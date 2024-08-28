//Import mongoose - used to connect to mongo db
const mongoose = require("mongoose");

//Create a Schema using mongoose
const Schema = mongoose.Schema;

//Create a new instance of schema using mongoose
const postSchema = new Schema(
  {
    title: { type: String, required: true },
    snippet: { type: String, required: true },
    body: { type: String, required: true },
  },
  { timestamps: true }
);

const Post = mongoose.model('Post', postSchema);

//Export Post module
module.exports = Post;

