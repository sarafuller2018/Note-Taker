const express = require("express");
const path = require("path");
const api = require("./routes/index")

const PORT = 3001; // puts a port into a variable for us to create a server on

const app = express(); // allows us to use the express library through a variable 

// middleware
app.use("/api", api)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// GET request route for homepage
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html')) // need to change to * eventually
});

// GET request route for notes page
app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, '/public/notes.html'))
})

app.listen(PORT, () => { console.log(`App listening at http://localhost:${PORT}`) }) // connects to a port and runs the function, must start server.js in terminal for the port to be accessed on localhost3001