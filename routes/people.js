const express = require("express");
const router = express.Router();

const { getPeople, getPerson } = require("../controllers/people");

router.route("/").get(getPeople);

router.route("/:id").get(getPerson);

module.exports = router;
