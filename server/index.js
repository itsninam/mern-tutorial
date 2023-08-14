const express = require("express");
const app = express();
const mongoose = require("mongoose");
const UserModel = require("./models/Users");

mongoose.connect(
  "mongodb+srv://moancea:pass123@cluster0.ngasa6d.mongodb.net/merntutorial?retryWrites=true&w=majority"
);

app.get("/getUsers", async (req, res) => {
  //send result to frontend
  try {
    const users = await UserModel.find({});
    res.send(users);
    console.log(users);
  } catch (err) {
    res.send(err);
    console.log(err);
  }
});

app.listen(3001, () => {
  console.log("SERVER RUNNING");
});
