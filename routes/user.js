const router = require("express").Router();
const userController = require("../controllers/userController");
const {
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("../middleware/verifyToken");

router.put("/", verifyTokenAndAuthorization, userController.updateUser);
router.delete("/", verifyTokenAndAuthorization, userController.deleteUser);
router.get("/", verifyTokenAndAuthorization, userController.getUser);
router.post("/skills", verifyTokenAndAuthorization, userController.addSkills);
router.get("/skills", verifyTokenAndAuthorization, userController.getSkills);
router.delete(
  "/skills/:id",
  verifyTokenAndAuthorization,
  userController.deleteSkill
);
router.get("/", verifyTokenAndAdmin, userController.getAllUsers);
router.get("/agents", userController.getAgents);
router.post("/agents", verifyTokenAndAuthorization, userController.postAgent);
router.put("/agents", verifyTokenAndAuthorization, userController.updateAgent);
router.get("/agents/:uid", userController.getAgent);

module.exports = router;
