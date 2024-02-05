
const router = require("express").Router();

const notesrouting = require("./notes")


router.use("/notes", notesrouting)



module.exports = router