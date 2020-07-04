const mongoose = require('mongoose');

// const GameReviewSchema = new mongoose.Schema({
//     title: { type: String },
//     content: { type: String },
// }, { timestamps: true });

// module.exports.GameReview = mongoose.model('GameReview', GameReviewSchema);

const GameSchema = new mongoose.Schema({
    title: { type: String, required: [true, "Title is required"] },
    genre: {type: String, required: [true, "Genre is required"]},
    price: { type: Number, required: [true, "Price is required"] },
    description: { type: String, required: [true, "Description is required"] },
    image_url: {type: String, required: [true, "Image URL (PS4) is required"]},
    image_url2: {type: String, required: [true, "Image URL (Xbox One) is required"]}
    // reviews: [GameReviewSchema]  
}, { timestamps: true });

module.exports.Game = mongoose.model('Game', GameSchema);


