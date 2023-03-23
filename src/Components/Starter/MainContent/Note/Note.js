import React, { useCallback, useState } from "react";
import { useDispatch } from "react-redux";

import { addTaskThrottlerRedux } from "../../../Helpers/AllHelpers.js";
import Task from "./Task/Task.js";
import TitleInput from "./TitleInput/TitleInput.js";
import Details from "./Details/Details.js";
import CloseButton from "./CloseButton/CloseButton.js";
import NoteInfo from "./NoteInfo/NoteInfo.js";
import "./Note.scss";

const Note = ({ note, updatesNotesTaskArray}) => {

  const [taskLength, setTaskLength] = useState(0);
  const dispatch = useDispatch();

  const createTask = useCallback(() => {
    addTaskThrottlerRedux(setTaskLength, note, dispatch);
    
  }, [note, dispatch]);

  return (
    <div className="note--container" id={note.id} key={note.id}>
      <TitleInput note={note} />
      <CloseButton note={note} />
      <Details createTask={createTask} note={note}/>
      {note.tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          note={note}
        />
      ))}
      <NoteInfo taskLength={taskLength} note={note} />
    </div>
  );
};

export default React.memo(Note);
