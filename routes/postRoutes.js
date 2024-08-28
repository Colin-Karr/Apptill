//Import express module
const express = require("express");
const postController = require("../controllers/postControllers");

//Create new instance of router object
const router = express.Router();
//'/posts' was removed from each location
//because it was scoped in app.js
//Posts routes
//Get index (Homepage)
router.get("/", postController.post_index);

//Post requests
router.post("/", postController.post_create_post);

//Create new posts
router.get("/create", postController.post_create_get);

//Get posts based on ids
router.get("/:id", postController.post_details);

//Delete requests
router.delete("/:id", postController.post_delete);


//Export router
module.exports = router;
