import React, { useState } from "react";
import CreateNote from "./components/CreateNote";
import Header from "./components/Header";
import NoteList from "./components/NoteList";

function App() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  // const [noteCard, setNoteCard] = useState([]);
  
  const [isActive, setIsActive] = useState(false)
  
  const [note, setNote] = useState([]);
  
  
  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  };
  
  const onChangeContent = (e) => {
    setContent(e.target.value);
  };
  
  const showForm = (event) => {
    event.preventDefault();
    setIsActive(true)
  };

  const hideForm = ()=>{
    setTitle("");
    setContent("");
    setIsActive(false);
  }
  const handleSave = (event) => {
    event.preventDefault();

    setNote([
      ...note,
      {
        id: Date.now(),
        title: title,
        content: content,
      },
    ]);

    // setTitle("");
    // setContent("");
    hideForm()

  };

  const deleteNote = (id) => {
    setNote(
      (previousState) =>
        previousState.filter((individualNote) => individualNote.id !== id) // important! previousState is a word which is equivalent to notes, similarly individualNotes is word which is equivalent to all the objects or items present in the array named 'notes' , So previousState & individualNote are not predefined , we  can put any name there. the param 'id' is equivalent to the 'all.id' which is coming from the Note.js delete button, it is telling that which element has to removed from the array by using its 'id' which we enter in handleSave() function.
    );
  };


  return (
    <div className="">
      <Header />
      <br />
      <hr />
      <br />
      <CreateNote
        title={title}
        content={content}
        onChangeTitle={onChangeTitle}
        onChangeContent={onChangeContent}
        handleSave={handleSave}
        isActive={isActive}
        hideForm={hideForm}
      />

      <NoteList note={note} deleteNote={deleteNote} isActive={isActive}/>
      <div className="show-note-form bg-white ">
        <button className=" text-5xl text-yellow-400 rounded-full fixed bottom-4 right-4">
          <i
            onClick={showForm}
            className="fa-solid fa-circle-plus bg-white rounded-full "
          ></i>
        </button>
      </div>
    </div>
  );
}

export default App;
