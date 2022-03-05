const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 8080;
const connectToDB = require("./models");
const Post = require("./models/Posts");
const Hero = require("./models/Hero");

const cors = require("cors");

// Middleware
app.use((req, res, next) => {
  console.log(req.method, req.path);
  next();
});
app.use(express.static("./public/"));
app.use(express.json());
app.use(cors());

app
  .route("/posts")
  .get(async (req, res) => {
    const posts = await Post.find({}).sort({ createdAt: -1 });
    // if (posts) {
    res.json(posts);
    // }
  })
  .post(async (req, res) => {
    const postData = await Post.create(req.body);
    res.send(postData);
  });

app
  .route("/hero")
  .get(async (req, res) => {
    const hero = await Hero.find({});

    res.json(hero);
  })
  .post(async (req, res) => {
    const heroData = await Hero.create(req.body);
    res.send(heroData);
  });

app.route("/posts/:id").get(async (req, res) => {
  const post = await Post.find({ _id: req.params.id });
  res.json(post);
});

connectToDB().then(() => {
  app.listen(port, console.log("STARTED LISTENING ON PORT " + port));
});
