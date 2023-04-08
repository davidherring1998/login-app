const router = require("express").Router();
const {
  getAllUsers,
  registerUser,
  loginUser,
  getOne,
} = require("../Controllers/userRoute");
const { protect } = require("../middleware/auth");

router.get("/", getAllUsers);
router.get("/me", protect, getOne);
router.post("/", registerUser);
router.post("/login", loginUser);

module.exports = router;
