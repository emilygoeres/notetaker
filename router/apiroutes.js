// Dependencies
const router = require ("express").Router();
const fs = require("fs");

// dbnotes = JSON.parse(dbnotes);

// Get route for notes
router.get("/api/notes", function (req, res) {
  let  dbnotes=JSON.parse(fs.readFileSync("./db/db.json", "utf8"))
    res.json(dbnotes)
})




// POST Route to add note
router.post("/api/notes", function (req, res) {
    let  savedNotes=JSON.parse(fs.readFileSync("./db/db.json", "utf8"))
    var newNote = {
        id: Math.floor(Math.random() * 1000),
        title: req.body.title,
        text: req.body.text
    }
    console.log(savedNotes);
    savedNotes.push(newNote)
    console.log(savedNotes);
    fs.writeFileSync("./db/db.json", JSON.stringify(savedNotes));
    res.json(savedNotes)

});

// Get route to clear all notes
router.delete("/api/notes/:id", function (req, res) {
    let noteData= []
    let  myNotes=JSON.parse(fs.readFileSync("./db/db.json", "utf8"))
    for (let i = 0; i < myNotes.length; i++) {
        if (myNotes[i].id != req.params.id) {
            noteData.push(myNotes[i])
        }
    }
    console.log(noteData)
    myNotes = noteData
    fs.writeFileSync("./db/db.json", JSON.stringify(myNotes));
    res.json(myNotes)
})


module.exports = router;
