
import React, { useCallback } from "react";
import "./titleInput.scss";
import {debounceInput} from "../../../../Helpers/AllHelpers.js";

const TitleInput = ({ note, updatesNotesTaskArray }) => {
  
  const getTitleInput = useCallback((note, e) => {

    if (e.key === "Enter") {
      e.target.blur();

      updatesNotesTaskArray({ ...note, title: e.target.value }, note.id);
    } else {
      debounceInput(note, e, updatesNotesTaskArray);
    }
  }, [updatesNotesTaskArray])

  return (
    <input
      autoComplete="off"
      className="title--input__style"
      type="text"
      onKeyDown={(e) => getTitleInput(note, e)}
      id={note.id + "title"}
      placeholder="Title"
    />
  );
};

export default TitleInput;
