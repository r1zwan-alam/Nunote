import React from "react";

function Note({ note, deleteNote }) { // these params are actually a way of using props 
  return (
    <div className="container ">
      <div className="grid grid-cols-2 gap-4">
        {note.map((all, i) => {
         // below some lines are very important
            return (
              <div key={i + 1} className=" p-3 rounded-2xl bg-white flex flex-col">
                <h1 className="capitalize font-semibold text-lg">{all.title}</h1>
                <p> {all.content}</p>
                <button
                  onClick={() => deleteNote(all.id)} // Very important do not forgot to put this () , otherwise the function deleteNote will call itself infinite times . all.id will tell the deleteNote function about the id of the element
                  className=" p-1  mt-auto ml-auto rounded-lg text-slate-800"
                >
                  <i className="fa-solid fa-trash"></i>
                </button>
              </div>
            );
          
        })}
      </div>
    </div>
  );
}

export default Note;
