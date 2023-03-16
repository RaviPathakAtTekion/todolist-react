import React, { useState } from "react";

import "./NoteInfo.scss";

function NoteInfo({taskLength, note, updatesNotesTaskArray}) {
  
  const [completeStatus, setcompleteStatus] = useState(false);
  
  const newNote = JSON.parse(JSON.stringify(note));
  
  const changeNoteState = () => {

    newNote.completed = true; 
    setcompleteStatus(true);

    updatesNotesTaskArray(newNote, newNote.id);
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
