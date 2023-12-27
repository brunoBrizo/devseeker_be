const router = require("express").Router();
const {
  verifyToken,
  verifyTokenAndAuthorization,
} = require("../middleware/verifyToken");
const bookmarkController = require("../controllers/bookmarkController");

router.post(
  "/",
  verifyTokenAndAuthorization,
  bookmarkController.createBookmark
);

router.delete(
  "/:id",
  verifyTokenAndAuthorization,
  bookmarkController.deleteBookmark
);

router.get("/", verifyTokenAndAuthorization, bookmarkController.getBookmarks);

router.get(
  "/bookmark/:id",
  verifyTokenAndAuthorization,
  bookmarkController.getBookmark
);

module.exports = router;
