const mongoose = require("mongoose");

const WishlistSchema = new mongoose.Schema({
    title: {
        type: String,
    },
    authors: {
        type: Array,
        default: [],
    },
    thumbnail: {
        type: String,
        defaul: null,
    },
    rating: {
        type: Number,
        default: 0,
    },
    created_at: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model("Wishlist", WishlistSchema);
