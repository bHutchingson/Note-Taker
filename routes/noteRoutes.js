const router = require('express').Router();
const path = require('path');
/* const router = express.Router(); */
const fs = require('fs');

//setting db.json to variable
const db = require('../db/db.json');

//get index html
router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, ".././public/index.html"));
});

//get notes html
router.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, ".././public/notes.html"));
});

//gets all notes from db
router.get("/api/notes", (req, res) => {
    fs.readFile("./db/db.json", 'utf-8', (err, data) => {
        if (err) console.log(err);
        else {
            res.send(data);
        }
    });
});

//post a note to db
router.post("/api/notes", (req, res) => {
    const data = req.body;
    data.id = data.title + db.length;
    db.push(data);
    fs.writeFile('./db/db.json', JSON.stringify(db), err => {
        if (err) {
            console.log(err);
        } else {
            console.log("Successfully added to db.json"); 
        }
    })
    res.send("Successfully written to db");
})

//delete a note from db

module.exports = router;