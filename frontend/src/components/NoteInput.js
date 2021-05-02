import React, { useState } from "react";
import noteService from '../services/noteService'
import { InputGroup, FormControl, Button } from 'react-bootstrap';

const NoteInput = () => {
    const [newTitle, setTitle] = useState("");
    const [newBody, setBody] = useState("");

    const addNote = (event) => {
        event.preventDefault();

        const newNote = {
            title: newTitle,
            body: newBody
        }

        try {
            noteService.createNote(newNote);
            window.location.reload();
        } catch (exception) {
            console.log(exception);
        }

        console.log(newNote);

        setTitle("");
        setBody("");
    }
    return (
        <div>
            <p>Title: </p>
            <InputGroup className="mb-3" value={newTitle} onChange={({ target }) => setTitle(target.value)}>
                <FormControl
                aria-label="Title"
                aria-describedby="basic-addon1"
                />
            </InputGroup>

            <p>Body: </p>
            <InputGroup>
                <FormControl as="textarea" value={newBody} onChange={({ target }) => setBody(target.value)} />
            </InputGroup>

            <p>Use the form above to create a post. Make sure you fill the required title and body fields and then press submit.</p>

            <Button variant="primary" onClick={(event) => addNote(event)}>Submit</Button>
        </div>
    )
}

export default NoteInput;