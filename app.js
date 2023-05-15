const express = require("express");

const { readJsonFile } = require("./utils/readJsonFile.js");

const app = express();

app.get("/hello", (req, res) => {
  res.status(200).send("Hello world");
});

app.get("/people", (req, res) => {
  const people = readJsonFile("./data/people.json");
  res.status(200).json(people);
});

app.listen(5000, () => {
  console.log("Server is listening on port 5000...");
});
