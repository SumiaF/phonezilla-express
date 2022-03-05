const mongoose = require("mongoose");
const HeroSchema = new mongoose.Schema({
  heading: { required: true, type: String },
  img: { required: true, type: String },
});
const Hero = mongoose.model("Hero", HeroSchema);
module.exports = Hero;
