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
    type: Number,
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
});
let Media = mongoose.model("Media", MediaSchema);

module.exports = Media;
