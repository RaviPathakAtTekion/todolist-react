import React, { useCallback, useState } from "react";

import Task from "./Task/Task.js";
import TitleInput from "./TitleInput/TitleInput.js";
import Details from "./Details/Details.js";
import CloseButton from "./CloseButton/CloseButton.js";
import { addTaskThrottler } from "../../../Helpers/AllHelpers.js";
import NoteInfo from "./NoteInfo/NoteInfo.js";
import "./Note.scss";

const Note = ({ note, updatesNotesTaskArray}) => {

  const [taskLength, setTaskLength] = useState(0);

  const createTask = useCallback(() => {

    addTaskThrottler(updatesNotesTaskArray, setTaskLength, note);
    
  }, [updatesNotesTaskArray, note]);

  return (
    <div className="note--container" id={note.id} key={note.id}>
      <TitleInput note={note} updatesNotesTaskArray={updatesNotesTaskArray} />
      <CloseButton note={note} updatesNotesTaskArray={updatesNotesTaskArray}/>
      <Details createTask={createTask} note={note}/>
      {note.tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          updatesNotesTaskArray={updatesNotesTaskArray}
          note={note}
        />
      ))}
      <NoteInfo taskLength={taskLength} note={note} updatesNotesTaskArray={updatesNotesTaskArray}/>
    </div>
  );
};

export default React.memo(Note);
