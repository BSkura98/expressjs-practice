const express = require("express");

const people = require("./routes/people");

const app = express();

app.use(express.json());

app.use("/people", people);

app.listen(5000, () => {
  console.log("Server is listening on port 5000...");
});
