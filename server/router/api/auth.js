const express = require("express");
const {
  registrationController,
  loginController,
  allUser,
} = require("../../controllers/authController");
const authMiddleware = require("../../middleware/authMiddleware");
const router = express.Router();
//localhost:3000/api/v1/auth/signup

router.post("/signup", registrationController);
router.post("/login", loginController);
router.get("/allUsers", authMiddleware, allUser);
module.exports = router;
