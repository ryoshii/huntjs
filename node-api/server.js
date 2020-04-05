const express = require("express");
const mongoose = require("mongoose");
const requireDir = require("require-dir");

const app = express();

mongoose.connect("mongodb://localhost:27017/huntjs", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

requireDir("./src/models");

app.get("/", (request, response) => {
  response.send("Hello");
});

app.listen("3001");
