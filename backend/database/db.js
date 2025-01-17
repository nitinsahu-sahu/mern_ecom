require("dotenv").config();
const mongoose = require("mongoose");

exports.connectToDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("connected to DB");
  } catch (error) {
    console.log("Error connecting to DB:", error);
    process.exit(1); // Exit the process with failure
  }
};
