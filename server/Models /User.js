const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Please enter a username."],
    },
    name: {
      type: String,
      required: [true, "Please enter a username."],
    },
    email: {
      type: String,
      required: [true, "Please enter a email."],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Please enter a password,"],
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
module.exports = User;
