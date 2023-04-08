const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv").config();
const connection = require("./Config/connection");
const userRoutes = require("./Routes/userRoutes");
const errHandler = require("./Middleware/error");

const app = express();
const PORT = process.env.PORT || 8002;
connection();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(errHandler);

// Routes
app.use("/api/user", userRoutes);

app.listen(PORT, (error) => {
  if (!error) {
    console.log(`Server connected on port: ${PORT}.`.blue.underline);
  } else {
    console.log(`Error, could not connect to port:${PORT}`);
  }
});
