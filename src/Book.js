const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({
  id: String,
  uid: String,
  title: String,
  description: String,
  authors: [String],
  image: String,
  link: String
});

const BookModel = mongoose.model("Book", BookSchema);

module.exports = BookModel;
