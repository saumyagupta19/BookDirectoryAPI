const Book = require("../models/Book");

exports.getBooks = async (req, res, next) => {
  try {
    const books = await Book.find();
    res.status(200).json({ success: true, count: books.length, data: books });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};

exports.getBook = async (req, res, next) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) {
      return res
        .status(400)
        .json({ success: false, msg: "book with given id doesn't exist" });
    }
    res.status(200).json({ success: true, data: book });
  } catch {
    res.status(400).json({ success: false });
  }
};

exports.updateBook = async (req, res, next) => {
  try {
    const book = await Book.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!book) {
      return res.status(400).json({ success: false });
    }
    res.status(200).json({ success: true, data: book });
  } catch (err) {
    return res.status(400).json({ success: false });
  }
};

exports.createBook = async (req, res, next) => {
  try {
    const book = await Book.create(req.body);
    res.status(201).json({ success: true, data: book });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};

exports.deleteBook = async (req, res, next) => {
  try {
    const book = await Book.findByIdAndDelete(req.params.id);

    if (!book) {
      res.status(400).json({ success: false });
    }

    res.status(200).json({ success: true, data: {} });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};
