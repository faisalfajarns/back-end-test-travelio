const express = require("express");

const router = express.Router();
const Wishlist = require("../models/Wishlist");

router.get("/get-wishlist", async (req, res) => {
    const wishlist = await Wishlist.find({});
    console.log(wishlist);
    return res.send({
        status: "success",
        data: [...wishlist],
    });
});

router.post("/create-wishlist", async (req, res) => {
    const { title, rating, authors, thumbnail } = req.body;
    console.log(req.body);
    const wishlist = await Wishlist.create({
        title: title,
        thumbnail: thumbnail,
        rating: rating,
        authors: authors,
    });
    if (wishlist) {
        console.log("mulai");
        console.log("selesai");
        console.log("wishlis", wishlist);
        return res.json(wishlist);
    } else {
        res.send("error");
    }
});

router.delete("/delete-wishlist/:id", async (req, res) => {
    const id = req.params.id;
    console.log("id", id);
    const wishlist = await Wishlist.findByIdAndDelete({ _id: id });

    return res.status(200).json({
        message: "success",
        data: wishlist,
    });
});

module.exports = router;
