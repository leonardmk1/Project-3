const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MediaSchema = new Schema({
  title: {
    type: String,
  },
  picture: {
    type: String,
  },
  id: {
    type: Number,
    unique: true,
  },
  ratings: {
    type: Array,
  },
  releaseDate: {
    type: String,
  },
  overview: {
    type: String,
  },
  mediaType: {
    type: String,
  },
  rating: {
    type: Number,
  },
});
let Media = mongoose.model("Media", MediaSchema);

module.exports = Media;
