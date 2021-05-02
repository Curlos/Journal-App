import React, { useState } from "react";
import { Card, Button } from 'react-bootstrap';
import noteService from '../services/noteService';

const Note = ({note}) => {

    const editNote = async () => {
        try {
            const newNote = {
                title: note.title,
                body: note.body
            }

            await noteService.editNote(note.id, newNote);

        } catch (exception) {
            console.log(exception);
        }
    }

    const removeNote = async () => {
        console.log(note)
        if (window.confirm(`Remove note ${note.title}`)) {
			try {
				const response = await noteService.deleteNote(note._id);
                window.location.reload();
			} catch (exception) {
				console.log(exception);
			}
		}
    }

    return (
        <div>
            <Card className="text-center">
                <Card.Header>{note.title}</Card.Header>
                <Card.Body>
                    <Card.Text>
                    {note.body}
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted">
                    <Button variant="link" onClick={editNote}>Edit</Button>
                    <Button variant="link" onClick={removeNote}>Delete</Button>
                </Card.Footer>
            </Card>
        </div>
    )
}

export default Note;