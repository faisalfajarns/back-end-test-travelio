const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

app.use(
    cors({
        origin: "*",
    })
);

//Import Routes
const whislistRoute = require("./routes/wishlist");

const url = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.igqwf.mongodb.net/traveliotestdb?retryWrites=true&w=majority`;

const connection = mongoose
    .connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("connected to database"))
    .catch((err) => console.log(err));

//routes
app.use("/api/v1/wishlist", whislistRoute);

//Listener
app.listen(9000, () => console.log("Running On Port 9000"));
