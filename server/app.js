const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv").config();
const connection = require("../config/connection");

const app = express();
const PORT = process.env.PORT || 8002;
connection();

app.listen(PORT, (error) => {
  if (!error) {
    console.log(`Server connected on port: ${PORT}`.cyan.underline);
  } else {
    console.log(`Error, could not connect to port:${PORT}`);
  }
});
