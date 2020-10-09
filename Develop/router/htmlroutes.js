// Dependencies
const router = express.Router();
const path = require('path');

app.get("/api/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "notes.html"));
});

app.get(`*`, function (req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

module.exports = router;
