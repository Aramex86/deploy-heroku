const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const apartementSchema = new Schema(
  {
    _id: { type: String, uniqe: true },
    listing_url: String,
    name: String,
    description: String,
    price: Number,
  },
  { collection: "listingsAndReviews" },
  { timestamp: true }
);

const Apartaments = mongoose.model("Apartament", apartementSchema);

module.exports = Apartaments;
