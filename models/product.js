const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String },
  image: { type: String },
  madein: { type: String },
  yearSX: { type: String },
  size: { type: String },
  numberSL: { type: Number, required: true },
});

module.exports = mongoose.model('Product', ProductSchema);
