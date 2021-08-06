const express = require("express");
const router = express.Router();

const postsService = require("../services/posts.service");

// READ
router.get("/", async (req, res) => {
  const posts = await postsService.getPosts();
  res.send(posts);
});

// READ
router.get("/:id", async (req, res) => {
  const posts = await postsService.getPost(req.params.id);
  res.send(posts);
});

// CREATE
router.post("/", async (req, res) => {
  // req.body => Body data
  const post = await postsService.createPost(req.body);
  res.send(post);
});

// UPDATE
router.put("/:id", async (req, res) => {
  // req.params => URL Parameters
  const post = await postsService.updatePost(req.params.id, req.body);
  res.send(post);
});

// DELETE
router.delete("/:id", async (req, res) => {
  // req.params => URL Parameters
  const post = await postsService.deletePost(req.params.id);
  res.send(post);
});

module.exports = router;
