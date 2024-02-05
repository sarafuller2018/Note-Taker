const notes = require("express").Router();

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
    //   note_id: uuid(),
    };

    readAndAppend(newNote, './db/db.json');
    res.json(`Note added successfully`);
  } else {
    res.error('Error in adding tip');
  }
});

module.exports = notes;