const mongoose = require("mongoose");

const User = mongoose.model(
  "user",
  new mongoose.Schema({
    name: String,
    user_id: String
  })
);

module.exports = User;