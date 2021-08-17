const mongoose = require('mongoose');
const { Schema } = mongoose;

const Product = new Schema({
  name: { type: String, required: true },
  price: { type: Number, default: 0},
  sorting: { type: Number}
});

module.exports = mongoose.model('Product', Product);