const mongoose = require("mongoose");

const Payment = mongoose.model(
  "payment",
  new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    url: String,
    formcode: String,
    amount: String,
    detail: String,
    order_id: String,
    hash: String,
  })
);

module.exports = Payment;