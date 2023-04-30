/* required modules */
const app = require("express").Router();
const fs = require("fs");
const uuid = require("../helpers/uuid");
const fsUtils = require("../helpers/fsUtils");

/* return all saved notes in JSON format */
app.get("/notes", (req, res) => {
    fs.readFile("./db/db.json", (err, data) =>{
        if(err)throw err;
        const notes = JSON.parse(data);
        res.JSON(notes);
    });
});

/* add data to db.json & return new note */
app.post("/notes", (req, res) => {
    if(req.body) {
        const newNote = {
            title: req.body.title,
            text: req.body.text,
            id: uuid(),
        };
        console.log(req.body);
        console.log(uuid);
        fsUtils(newNote, "./db/db.json");
        res.json("A new note was added!")
    } else {
        res.errored("Error! Note not added.");
    }
});

/* export router */
module.exports = app;