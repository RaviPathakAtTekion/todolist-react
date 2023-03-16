import { Fragment } from "react";
import Note from "./Note/Note.js";
import "./MainContent.scss";

function MainContent({ notes, noteLength, changeNotesData, addNote }) {
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
            <Note
              key={note.id}
              note={note}
              updatesNotesTaskArray={changeNotesData}
            />
          ) : (
            ""
          )
        )}
      </div>
    </Fragment>
  );
}

export default MainContent;
