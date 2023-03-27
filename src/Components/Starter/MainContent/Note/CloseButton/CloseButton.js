import React from "react";
import { useDispatch } from "react-redux";
import { closeNoteRedux } from "../../../../Helpers/AllHelpers.js";
import "./CloseButton.scss";

function CloseButton({ note}) {

  const dispatch = useDispatch();

  const closeNote = (note) => {
    closeNoteRedux(note.id, dispatch);

  };

  return (
    <button
      type="button"
      className="close--note"
      onClick={() => closeNote(note)}
      id={note.id + "close"}
    >
      X
    </button>
  );
}

export default React.memo(CloseButton);
