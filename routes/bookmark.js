const router = require("express").Router();
const {
  verifyToken,
  verifyAndAuth,
  verifyAgent,
} = require("../middleware/verifyToken");
const bookmarkController = require("../controllers/bookmarkController");

// CREATE BOOKMARK ROUTE
router.post("/", verifyAndAuth, bookmarkController.createBookmark);

// DELETE BOOKMARK ROUTE
router.delete("/:id", verifyAndAuth, bookmarkController.deleteBookmark);

// GET BOOKMARKS ROUTE
router.get("/", verifyAndAuth, bookmarkController.getAllBoomark);

// GET BOOKMARK ROUTE
router.get("/bookmark/:id", verifyAndAuth, bookmarkController.getBookMark);

module.exports = router;
