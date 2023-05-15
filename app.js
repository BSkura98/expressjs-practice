const express = require("express");

const people = require("./routes/people");

const app = express();

app.use("/people", people);

app.get("/hello", (req, res) => {
  res.status(200).send("Hello world");
});

app.listen(5000, () => {
  console.log("Server is listening on port 5000...");
});
