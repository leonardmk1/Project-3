const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ReviewsSchema = new Schema({
    title:  String, 
    picture: String,
    id: Number,
    body:   String,
    rating: Number,
    comments: [{ body: String, date: Date }],
    date: { type: Date, default: Date.now },
})

let Reviews = mongoose.model('Reviews', ReviewsSchema)

module.exports = Reviews