/* required modules */
const app = require("express").Router();
const fs = require("fs");
const uuid = require("../helpers/uuid");
const path = require("path");

/* return index.html */
app.get("/", (req, res) =>{
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

/* return notes.html */
app.get("/notes", (req, res) =>{
    res.sendFile(path.join(__dirname, "../public/notes.html"));
});

/* export router */
module.exports = app;