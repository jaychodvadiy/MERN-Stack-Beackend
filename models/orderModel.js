
const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  products: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }],
  totalAmount: { type: Number },
  paymentStatus: { type: String },
});

module.exports = mongoose.model("Order", OrderSchema);
