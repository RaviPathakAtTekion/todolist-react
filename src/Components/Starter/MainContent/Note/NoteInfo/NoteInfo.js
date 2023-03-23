import React, { useState } from "react";
import { completeNoteStatus } from "../../../../Helpers/AllHelpers.js";
import { useDispatch } from "react-redux";
import "./NoteInfo.scss";

function NoteInfo({taskLength, note}) {
  
  const [completeStatus, setcompleteStatus] = useState(false);
  const dispatch = useDispatch();
  
  const changeNoteState = () => {
    completeNoteStatus(note.id, true, dispatch);
    setcompleteStatus(true); 
  }

  return (
    <div className="data--style">
      <p className="task--length__style">No of Tasks : {taskLength}</p>
      <button className="button__style" type="submit" onClick={changeNoteState} status={completeStatus.toString()}>
        Complete Note
      </button>
    </div>
  );
}

export default React.memo(NoteInfo);
