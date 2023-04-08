const mongoose = require("mongoose");

const connection = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`Connected to MongoDB ${conn.connection.host}`.underline.blue);
  } catch (error) {
    console.log(`Connection to MongoDB failed`);
    process.exit(1);
  }
};

module.exports = connection;
