const express = require("express");
const mongoose = require("mongoose");
const requireDir = require("require-dir");

const app = express();

mongoose.connect("mongodb://localhost:27017/huntjs", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

requireDir("./src/models");

const Product = mongoose.model("Product");

app.get("/", (request, response) => {
  Product.create({
    title: "React Native",
    description: "Build native apps with React",
    url: "http://github.com/facebook/react-native"
  });

  response.send("Hello");
});

app.listen("3001");
