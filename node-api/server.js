const express = require("express");
const mongoose = require("mongoose");

const app = express();

mongoose.connect("mongodb://localhost:27017/huntjs", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.get("/", (request, response) => {
  response.send("Hello");
});

app.listen("3001");
