var mongoose = require('mongoose');
const ObjectId =mongoose.Schema.Types.ObjectId;
const Schema = mongoose.Schema;

var ProductSchema = new mongoose.Schema({
  _id: Schema.Types.ObjectId,
  prod_name: String,
  prod_desc: String,
  prod_price: Number,
  updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Product', ProductSchema,'Product');
