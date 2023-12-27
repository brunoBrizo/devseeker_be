const router = require("express").Router();
const jobController = require("../controllers/jobController");
const { verifyTokenAndAgent } = require("../middleware/verifyToken");

router.post("/", verifyTokenAndAgent, jobController.createJob);
router.put("/:id", verifyTokenAndAgent, jobController.updateJob);
router.delete("/:id", verifyTokenAndAgent, jobController.deleteJob);
router.get("/:id", jobController.getJob);
router.get("/", jobController.getAllJobs);
router.get("/agent/:id", jobController.getAgentJobs);
router.get("/search/:key", jobController.searchJobs);

module.exports = router;
