import { Fragment } from "react";
import Note from "./Note/Note.js";
// import NotesCon

import "./MainContent.scss";
import { useSelector } from "react-redux";

function MainContent({ addNote }) {
  const notes = useSelector((state) => state.notes);

  const noteLength = notes.filter((note) => {
    if (note !== null && note.completed !== true) return true;
    else return false;
  }).length;

  return (
    <Fragment>
      <div className="info--header__style">
        <button
          className="add--NoteButton__style"
          type="button"
          id="createNewNote"
          onClick={addNote}
        >
          Add Note
        </button>
        <h4 className="notes--info__style">No of Notes: {noteLength}</h4>
      </div>
      <div id="divStarter">
        {notes?.map((note) =>
          note !== null && note.completed !== true ? (
            <Note key={note.id} note={note} />
          ) : (
            ""
          )
        )}
      </div>
    </Fragment>
  );
}

export default MainContent;
