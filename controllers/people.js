const { readJsonFile, writeJsonFile } = require("../utils/jsonFile");

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

const createPerson = (req, res) => {
  const { firstName, lastName, birthday, job, city } = req.body;
  let people = readJsonFile("./data/people.json");
  const id = people[people.length - 1].id + 1;
  people.push({ id, firstName, lastName, birthday, job, city });
  writeJsonFile(people, "./data/people.json");
  res.status(201).json(people);
};

module.exports = { getPeople, getPerson, createPerson };
