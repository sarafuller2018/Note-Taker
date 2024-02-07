const notes = require("express").Router();
const { readFromFile, readAndAppend } = require('../helpers/fsUtils');
const uniqid = require("uniqid");
const db = require("../db/db.json");

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
    
    readFromFile("./db/db.json").then((data) => res.json(JSON.parse(data)));
    
    
  }});


module.exports = notes;