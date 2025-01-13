const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(
  process.env.MONGO_URI,
);

const User = mongoose.model("Users", {
  name: String,
  email: String,
  password: String,
});

const user = new User({
  name: "arslan",
  email: "xyz@gmail.com",
  password: "123456",
});

user.save();