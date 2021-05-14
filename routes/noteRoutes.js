const router = require('express').Router();
const path = require('path');
const router = express.Router();
const fs = require('fs');

//setting db.json to variable
const db = require('../db/db.json');

//get index.html
router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

//get notes.html
router.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "notes.html"));
});
