const fs = require("fs");

function readJsonFile(filename) {
  try {
    const data = fs.readFileSync(filename, "utf8");
    const jsonData = JSON.parse(data);
    return jsonData;
  } catch (error) {
    console.error("Error while reading JSON: ", error);
    return null;
  }
}

function writeJsonFile(object, filename) {
  try {
    const jsonData = JSON.stringify(object);
    fs.writeFileSync(filename, jsonData);
  } catch (error) {
    console.error("Error while writing JSON:", error);
  }
}

module.exports = { readJsonFile, writeJsonFile };
