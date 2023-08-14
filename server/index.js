const express = require("express");
const app = express();
const mongoose = reuqire("mongoose");

mongoose.connect(
  "mongodb+srv://moancea:pass123@cluster0.ngasa6d.mongodb.net/merntutorial?retryWrites=true&w=majority"
);

app.listen(3001, () => {
  console.log("SERVER RUNNING");
});
