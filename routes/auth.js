const express = require("express");
const router = express.Router();
const { register, login, getAllUsers } = require("../controllers/authController");
const { auth, adminOnly } = require("../middleware/authMiddleware");

router.post("/register", register);
router.post("/login", login);
router.get("/users", auth, adminOnly, getAllUsers);

module.exports = router;
