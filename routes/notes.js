const router = require("express").Router();


router.get("/", (req, res) => {
    res.send("this is the /api/notes endpoint")
})
router.post("/", (req, res) => {
    res.send("this is the /api/notes endpoint")
})



module.exports = router





