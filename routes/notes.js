const notes = require("express").Router();
const { readFromFile, readAndAppend } = require('../helpers/fsUtils');
const uniqid = require("uniqid");
const fs = require("fs");

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
    res.error('Error in adding note');
  }
});

// DELETE request
notes.delete("/:id", (req, res) => {

  const id = req.params.id;

  if (id) {
    console.log(`Deleting note with id: ${id}`)

    function checkID(db) {
      console.log("db is: ", db);
      return db.id !== id
    }

    readFromFile("./db/db.json")
      .then((data) => {
        const parsedData = JSON.parse(data);
        const filteredData = parsedData.filter(checkID);
        console.log(filteredData);

        fs.writeFile('./db/db.json', JSON.stringify(filteredData) || [], (err) =>
          err ? console.error(err) : console.log('Success!'));
      })
      .then(() => res.json({ ok: true }));
  }
});

module.exports = notes;