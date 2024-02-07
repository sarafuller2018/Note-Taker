const express = require("express");
const path = require("path");
const api = require("./routes/index");

const PORT = 3001; // port into a variable to create a server on

const app = express(); // allows use of express library through a variable 

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use("/api", api); // place after others as to not prevent others from being read

// GET request route for homepage
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'))
});

// GET request route for notes page
app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, '/public/notes.html'))
});

// GET request route for homepage for any route that does not exist
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'))
});

app.listen(PORT, () => { console.log(`App listening at http://localhost:${PORT}`) }) // connects to port and runs function, must start server.js in terminal for port to be accessed on localhost3001