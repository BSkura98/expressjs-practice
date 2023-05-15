import express from "express";

const app = express();

app.get("/hello", (req, res) => {
  res.status(200).send("Hello world");
});

app.listen(5000, () => {
  console.log("Server is listening on port 5000...");
});
