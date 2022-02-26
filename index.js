const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 8080;
const connectToDB = require("./models");
const Post = require("./models/Posts");

app.use((req, res, next) => {
  console.log(req.method, req.path);
  next();
});

app.use(express.json());

app
  .route("/posts")
  .get(async (req, res) => {
    const posts = await Post.find({});
    // if (posts) {
    res.json(posts);
    // }
  })
  .post(async (req, res) => {
    const postData = await Post.create(req.body);
    res.send(postData);
  });

app
.route("/posts/:id")
.get(async(req, res) => {
  const post = await Post.find({_id: req.params.id});
  res.json(post)
})

connectToDB().then(() => {
  app.listen(port, console.log("STARTED LISTENING ON PORT " + port));
});
