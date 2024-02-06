const notes = require("express").Router();
const { readFromFile, readAndAppend } = require('../helpers/fsUtils');
const uniqid = require("uniqid");

// GET request
notes.get("/", (req, res) => {
    readFromFile("./db/db.json").then((data) => res.json(JSON.parse(data)));
});

// POST request
notes.post("/", (req, res) => {
const { title, text } = req.body;

  if (req.body) {
    const newNote = {
      title,
      text,
      id: uniqid(),
    };

    readAndAppend(newNote, './db/db.json');
    res.json(`Note added successfully`);
  } else {
    res.error('Error in adding tip');
  }
});

notes.delete("/", (req, res) => {
  res.send("Delete request called");
})

module.exports = notes;