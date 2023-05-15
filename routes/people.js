const express = require("express");
const router = express.Router();

const { getPeople } = require("../controllers/people");

router.route("/").get(getPeople);

module.exports = router;
