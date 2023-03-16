import { useCallback, useState } from "react";
import "./Task.scss";
import {debounceTaskInput} from "../../../../Helpers/AllHelpers.js";

const Task = ({ task, updatesNotesTaskArray, note }) => {
  const [changeStatus, setChangeStatus] = useState(false);

  const newNote = JSON.parse(JSON.stringify(note));
  const taskId = newNote.tasks[task.id.substring(4) - 1];
  
  const getTaskInput = (e) => {
    if (e.key === "Enter") {
      e.target.blur();

      taskId.content = e.target.value;

      updatesNotesTaskArray(newNote, newNote.id);
    } else {
      debounceTaskInput(e, taskId, newNote, updatesNotesTaskArray)
    }
  };

  const toggleStatus = useCallback(() => {

    taskId.status = taskId.status === true ? false : true; 
    setChangeStatus(prevState => prevState = !prevState);
    updatesNotesTaskArray(newNote, newNote.id);
    
  }, [newNote, taskId, updatesNotesTaskArray]);

  return (
    <div className="taskDiv">
      <input
        autoComplete="false"
        type="checkbox"
        defaultChecked={task.status}
        className="taskCheckBox"
        onChange={toggleStatus}
      />
      <input
        type="text"
        placeholder="Task"
        className={`task--input__style ${changeStatus ? "strike--text" : ""}`}
        id={task.id}
        onKeyDown={getTaskInput}
      />
    </div>
  );
};

export default Task;
