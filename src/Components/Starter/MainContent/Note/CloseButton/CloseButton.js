import React from "react";
import "./CloseButton.scss";

function CloseButton({ note, updatesNotesTaskArray}) {

  const closeNote = (note) => {
    updatesNotesTaskArray(null, note.id);
  };

  return (
    <button
      type="button"
      className="close--note"
      onClick={(e) => closeNote(note)}
      id={note.id + "close"}
    >
      X
    </button>
  );
}

export default React.memo(CloseButton);
