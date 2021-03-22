const { Schema, model, Types } = require("mongoose");

const schema = new Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  description: { type: String, required: true, unique: true },
  rating: { type: String },
  starRating: { type: String },
  owner: [{ type: Types.ObjectId, ref: "User" }],
});

module.exports = model("Favourite", schema);
