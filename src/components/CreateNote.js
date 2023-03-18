import React from "react";
import "../App.css";

function CreateNote({
  title,
  content,
  handleSave,
  onChangeTitle,
  onChangeContent,
  isActive,
  hideForm
}) {
  // {isActive ? alert('active') : alert('not active')}

  return (
    <div id="newNoteForm" className={isActive ? "show" : "hide"}>
      <form
        onSubmit={handleSave}
        action=""
        className="shadow-lg flex flex-col h-[70vh] rounded-xl bg-gray-100 pt-2"
      >
        <input
          className="focus:outline-none  p-2 pl-4 rounded-t-xl bg-transparent"
          placeholder="Title"
          type="text"
          value={title}
          onChange={onChangeTitle}
          required
        />

        <textarea
          className="resize-none focus:outline-none bg-transparent p-2 pl-4 overflow-hidden"
          placeholder="Content"
          name=""
          id=""
          cols="10"
          rows="70"
          value={content}
          onChange={onChangeContent}
          required
        ></textarea>

        <div className="flex ">
          <button
            type="submit"
            className="bg-green-300 p-2 mt-auto rounded-bl-xl basis-[50%]"
          >
            Save
          </button>
          <a
            onClick={hideForm}
            className="bg-red-300 p-2 mt-auto rounded-br-xl text-center basis-[50%]"
          >
            Cancel
          </a>
        </div>
      </form>
    </div>
  );
}

export default CreateNote;
