const notesRouter = require("express").Router();
const Note = require("../models/note");

notesRouter.get("/", async(request, response) => {
    const notes = await Note.find({});
    response.json(notes.map((note) => note.toJSON()));
});

notesRouter.post("/", async (request, response, next) => {
    const reqBody = request.body;

    const note = new Note({
        title: reqBody.title,
        body: reqBody.body,
    })

    const savedNote = await note.save();
    return response.json(savedNote);
})

notesRouter.put("/:id", (request, response, next) => {
    const reqBody = request.body;

    const note = {
        title: reqBody.title,
        body: reqBody.body
    }

    Note.findByIdAndUpdate(request.params.id, note, { new: true })
        .then((updatedNote) => {
            response.json(updatedNote);
        })
        .catch((error) => next(error));
})

notesRouter.delete("/:id", async (request, response) => {
    console.log('deleting note...');
    await Note.findByIdAndRemove(request.params.id);
    response.status(204).end();
})


module.exports = notesRouter;