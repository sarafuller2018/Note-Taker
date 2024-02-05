const express = require("express");
const path = require("path");
const api = require("./routes/index")

const PORT = 3001; // puts a port into a variable for us to create a server on

const app = express(); // allows us to use the express library through a variable 

//GET request
app.get("/", (req, res) => {
    res.send("hello")
})

//GET request
app.get("/honepage", (req, res) => {
    res.send("This is the homepage")
})
app.get("/homepage/hello", (req, res) => {
        res.send("hellooooooo!!!!!!!")
})

app.use("/api", api)

// app.get("/api/notes/", (req, res) => {
//     res.send("this is the /api/notes endpoint")
// })
// app.post("/api/notes/", (req, res) => {
//     res.send("this is the /api/notes endpoint")
// })

app.listen(PORT, () => { console.log(`App listening at http://localhost:${PORT}`) }) // connects to a port and runs the function, must start server.js in terminal for the port to be accessed on localhost...

//http://localhost:3001/