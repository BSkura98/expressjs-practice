const { readJsonFile } = require("../utils/readJsonFile");

const getPeople = (req, res) => {
  const people = readJsonFile("./data/people.json");
  res.status(200).json(people);
};

const getPerson = (req, res) => {
  const { id } = req.params;
  const people = readJsonFile("./data/people.json");
  const person = people.find((p) => p.id === Number(id));
  res.status(200).json(person);
};

module.exports = { getPeople, getPerson };
