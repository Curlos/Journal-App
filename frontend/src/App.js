import React, { useState, useEffect } from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import NoteInput from './components/NoteInput';
import Note from './components/Note';
import noteService from './services/noteService';

const App = () => {
  const [notes, setNotes] = useState([])

  useEffect(() => {
    noteService.getAllNotes().then((notes) => setNotes(notes));
  }, []);

  return (
    <div>
      <Header />
      <NoteInput />
      {notes.map((note) => <Note note={note}/>)}
    </div>
  );
}

export default App;
