import React from 'react'
import Note from './Note'
import "../App.css"

function NoteList({ note, deleteNote , isActive}) {
  return (
    <div id='noteList' className={isActive ? "hide" : "show" }>
      <Note note={note} deleteNote={deleteNote} />
      {/* <Note/> */}
      {/* <Note/> */}
    </div>
  );
}

export default NoteList