const { readJsonFile, writeJsonFile } = require("../utils/jsonFile");

const getPeople = (req, res) => {
  const people = readJsonFile("./data/people.json");
  res.status(200).json(people);
};

const getPerson = (req, res) => {
  const { id } = req.params;
  const people = readJsonFile("./data/people.json");
  const person = people.find((p) => p.id === Number(id));
  if (!person) {
    res.status(404).json({ message: "Person not found" });
  }
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

const updatePerson = (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, birthday, job, city } = req.body;
  let people = readJsonFile("./data/people.json");
  const person = people.find((p) => p.id === Number(id));
  if (!person) {
    res.status(404).json({ message: "Person not found" });
  }
  people = people.map((p) => {
    if (p.id === Number(id)) {
      p = {
        ...p,
        firstName,
        lastName,
        birthday,
        job,
        city,
      };
    }
    return p;
  });
  writeJsonFile(people, "./data/people.json");
  res.status(200).json({
    id,
    firstName,
    lastName,
    birthday,
    job,
    city,
  });
};

const deletePerson = (req, res) => {
  const { id } = req.params;
  let people = readJsonFile("./data/people.json");
  const person = people.find((p) => p.id === Number(id));
  if (!person) {
    res.status(404).json({ message: "Person not found" });
  }
  people = people.filter((p) => p.id !== Number(id));
  writeJsonFile(people, "./data/people.json");
  res.status(200).json(people);
};

module.exports = {
  getPeople,
  getPerson,
  createPerson,
  updatePerson,
  deletePerson,
};
