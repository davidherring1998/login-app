const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../Models /User");

// GET all USERS
const getAllUsers = asyncHandler(async (req, res) => {
  try {
    const user = await User.find({});
    res.status(200).json({ response: user });
  } catch (error) {
    res.status(400).json({ response: "Error, bad request." });
  }
});

// GET one USER
const getOne = asyncHandler(async (req, res) => {
  try {
    // Deconstruct
    const { username, name, email } = req.body;

    const findUser = await User.findById(req.user.id);

    res.status(200).json({
      username,
      name,
      email,
    });
  } catch (error) {
    res.status(400).json({ response: `Bad request.` });
  }
});

const registerUser = asyncHandler(async (req, res) => {
  try {
    // Deconstruct req body.
    const { username, name, email, password } = req.body;

    // Validate that all required fields are given.
    if (!username || !name || !email || !password) {
      res
        .status(400)
        .json({ response: `Bad request, please enter required fields.` });
    }

    // Check if user exist.
    const userExist = await User.findOne({ email });
    if (userExist) {
      res.status(400).json({ response: `Bad request, user already exist.` });
    }

    //hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt); // Requires plain test password and salt

    // Create User
    const user = await User.create({
      username,
      name,
      email,
      password: hashedPassword,
    });

    if (user) {
      res.status(201).json({
        response: `User was registered in the database.`,
        _id: user.id,
        username: user.username,
        name: user.name,
        email: user.email,
        token: generateToken(user.id),
      });
    }
    // const user = await User.create
  } catch (error) {
    res.status(400).json({ response: "Bad request, user not created." });
  }
});

const loginUser = asyncHandler(async (req, res) => {
  try {
    // Deconstruct
    const { email, password } = req.body;

    // Find a user.
    const user = await User.findOne({ email });

    // Match user password. bcrypt.compare requires plain text and encrypted password
    if (user && (await bcrypt.compare(password, user.password))) {
      res.status(200).json({
        response: `User successfully logged in.`,
        _id: user.id,
        username: user.username,
        name: user.name,
        email: user.email,
        token: generateToken(user.id),
      });
    }
  } catch (error) {
    res
      .status(400)
      .json({ response: "Error, bad request. User was not logged in." });
  }
});

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: `30d` });
};

module.exports = {
  getAllUsers,
  registerUser,
  loginUser,
  getOne,
};
