// Dependencies
const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require('path');

// Sets up the Express App
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.static("public"))

// let dbdata = fs.readFileSync(path.join(_dirname, "../data/db.json"), "utf8");
// dbData = JSON.parse(dbData);

// Array of notes
var notes:[
    // {
        // "Note Title":"Groceies",
        // "Note Text":"Cougar Gold Cheese"
    // },
];

// Get route for notes
router.get("/notes", function (req, res) {
    res.json(noteData)
})
app.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
});

app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

// Get route to clear all notes
router.get("/clear", function (req, res) {
    noteData = [];
    res.send("Deleted")
})

// Route to add note




fs.writeFileSync(path.join(_dirname, "../data/db.json"), JSON.stringify(newDBState, null, 2));
res.json(writeNote)

});

module.exports = router;



