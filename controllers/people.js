const { readJsonFile } = require("../utils/readJsonFile");

const getPeople = (req, res) => {
  const people = readJsonFile("./data/people.json");
  res.status(200).json(people);
};

module.exports = { getPeople };
