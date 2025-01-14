const express = require("express");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const jwtPassword = "123456";
require("dotenv").config();

mongoose.connect(
  process.env.MONGO_URI,
);

const User = mongoose.model("User", {
  name: String,
  username: String,
  password: String,
});

const app = express();
app.use(express.json());

async function userExists(username, password) {
  const user = await User.findOne( {username: username, password: password});
  if(user)
    return true;
  else
    return false;
}

app.post("/signin", async function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  const exists = await userExists(username, password);

  if (!exists) {
    return res.status(403).json({
      msg: "User doesnt exist in our in memory db",
    });
  }

  var token = jwt.sign({ username: username }, jwtPassword);
  return res.json({
    token,
  });
});

app.post("/signup", async (req, res) => {
  const name = req.body.name;
  const username = req.body.username;
  const password = req.body.password;

  const exists = await userExists(username, password);

  if (exists) {
    return res.status(403).json({
      msg: "User already exists",
    });
  } else {
    const user = new User({
      name: name,
      username: username,
      password: password,
    });

    try {
      await user.save();
      res.status(200).json({
        msg: "User created",
      });
    } catch (err) {
      res.status(500).json({
        msg: "Error creating user",
        error: err,
      });
    }
  }
});

app.get("/users", async function (req, res) {
  const token = req.headers.authorization;
  try {
    const decoded = jwt.verify(token, jwtPassword);
    const username = decoded.username;
    // return a list of users other than this username from the database
    const users = await User.find({username: {$ne: username}});
    res.status(200).json(users);
  } catch (err) {
    return res.status(403).json({
      msg: "Invalid token",
    });
  }
});

app.listen(3000);