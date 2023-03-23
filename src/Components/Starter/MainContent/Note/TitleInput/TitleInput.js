
import React, { useCallback } from "react";
import { useDispatch } from "react-redux";

import "./titleInput.scss";
import { addTitleToNote } from "../../../../Helpers/AllHelpers.js";
import {debounceInput} from "../../../../Helpers/AllHelpers.js";

const TitleInput = ({ note }) => {

  const dispatch = useDispatch();
  
  const getTitleInput = useCallback((note, e) => {

    if (e.key === "Enter") {
      e.target.blur();      

      addTitleToNote(note, dispatch, e);
    } else {
      debounceInput(note, e, dispatch);
    }
  }, [dispatch])

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
