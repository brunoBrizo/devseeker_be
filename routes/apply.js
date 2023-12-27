const router = require("express").Router();
const applyController = require("../controllers/applyController");
const {
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("../middleware/verifyToken");

router.post("/", verifyTokenAndAuthorization, applyController.apply);
router.get("/", verifyTokenAndAuthorization, applyController.getApplied);

module.exports = router;
