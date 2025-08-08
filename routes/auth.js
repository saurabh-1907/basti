const express = require("express");
const router = express.Router();
const { register, login, getAllUsers, getCurrentUser } = require("../controllers/authController");
const { auth, adminOnly } = require("../middleware/authMiddleware");

router.post("/register", register);
router.post("/login", login);
router.get("/users", auth, adminOnly, getAllUsers);
router.get("/me", auth, getCurrentUser); // new route

module.exports = router;
