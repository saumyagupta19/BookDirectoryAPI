const express = require("express");
const {
  getBook,
  getBooks,
  createBook,
  updateBook,
  deleteBook,
} = require("../controllers/books");
const router = express.Router();

router.route("/").get(getBooks).post(createBook);

router.route("/:id").get(getBook).put(updateBook).delete(deleteBook);

module.exports = router;
