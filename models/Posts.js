const mongoose = require("mongoose");

//  A schema is a description of what data should look like
const PostSchema = new mongoose.Schema(
  {
    teaser: { required: true, type: String },
    title: { required: true, type: String },
    img: { required: true, type: String },
    imagecredit: { required: true, type: String },
    text: { required: true, type: String },
    tags: { type: Array },
  },
  { timestamps: true }
);

// model is the tool we use to interact with DB
const Post = mongoose.model("Post", PostSchema);
module.exports = Post;
