const notesRouter = require("express").Router();
const Note = require("../models/note");

notesRouter.get("/", async(request, response) => {
    const notes = await Note.find({});
    response.json(notes.map((note) => note.toJSON()));
});


module.exports = notesRouter;