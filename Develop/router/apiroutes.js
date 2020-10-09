// Dependencies
const router = express.Router();
const fs = require("fs");



let dbnotes = fs.readFileSync(path.join(_dirname, "/api/notes/db.json"), "utf8");
 dbnotes = JSON.parse(dbnotes);

// Array of notes
var notes:[
    // {
        // "Note Title":"Groceies",
        // "Note Text":"Cougar Gold Cheese"
    // },
];

// Get route for notes
router.get("/api/notes", function (req, res) {
    res.json(noteData)
})


// Get route to clear all notes
router.get("/api/notes/:id", function (req, res) {
    noteData = [];
    res.send("Deleted")
})

// POST Route to add note
router.post("/api/notes", function(req,res){
    if(noteData)




fs.writeFileSync(path.join(_dirname, "/api/notes/db.json"), JSON.stringify(newDBState, null, 2));
res.json(writeNote)

});

module.exports = router;
