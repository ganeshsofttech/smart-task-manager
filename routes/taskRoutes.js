const express = require("express");

const router = express.Router();

const controller = require("../controllers/taskController");
const auth = require("../middleware/auth");
const authorize = require("../middleware/authorize");
router.post("/createTask", auth, controller.createTask);

router.get("/getTask", auth, authorize("Admin", "Manager","Employee"),controller.getTasks);

router.put("/updateTask/:id", auth, controller.updateTask);

router.delete("/deleteTask/:id", auth, controller.deleteTask);

module.exports = router;
