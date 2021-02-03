const router = require("express").Router();
const booksController = require("../../controller/booksController");

// Matches with "/api/books/"
// router.route("/")
//   .get(booksController.findAll)
//   .post(booksController.create)


// Matches with "/api/books/:id"
router
  .route("/:search")
  .get(booksController.searchBooks)
  // .get((req, res) => {console.log(req.params.search)})
  // .get(booksController.findById)
  // .delete(booksController.remove);

module.exports = router;