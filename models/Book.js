const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: [true, "Please add a Name"],
    unique: true,
    trim: true,
    maxlength: [50, "Name cannot be more than 50 characters"],
  },

  Description: {
    type: String,
    required: [true, "Please add a Description"],
    maxlength: [1000, "Description cannot be more than 500 characters"],
  },

  Author: {
    type: String,
    required: [true, "Please add a Author Name"],
    trim: true,
    maxlength: [50, "Author Name cannot be more than 50 characters"],
  },
  AverageRating: {
    type: Number,
    min: [1, "Rating must be at least 1"],
    max: [10, "Rating cannot be more than 10"],
  },
});

module.exports = mongoose.model("Book", BookSchema);
