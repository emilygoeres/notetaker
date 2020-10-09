// Dependencies
const router = require ("express").Router();
const fs = require("fs");
let dbnotes = []
// dbnotes = JSON.parse(dbnotes);

// Get route for notes
router.get("/api/notes", function (req, res) {
    dbnotes=JSON.parse(fs.readFileSync("./db/db.json", "utf8"))
    res.json(dbnotes)
})




// POST Route to add note
router.post("/api/notes", function (req, res) {
    var newNote = {
        id: Math.floor(Math.random() * 1000),
        title: req.body.title,
        text: req.body.text
    }
    dbnotes.push(newNote)
    fs.writeFileSync("./db/db.json", JSON.stringify(dbnotes));
    res.json(dbnotes)

});

// Get route to clear all notes
router.delete("/api/notes/:id", function (req, res) {
    var noteData = [];
    for (let i = 0; i < dbnotes.length; i++) {
        if (dbnotes[i].id != req.params.id) {
            noteData.push(dbnotes[i])
        }
    }
    console.log(noteData)
    dbnotes = noteData
    fs.writeFileSync("./db/db.json", JSON.stringify(dbnotes));
    res.json(dbnotes)
})


module.exports = router;
