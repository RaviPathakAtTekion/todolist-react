import { useCallback, useState } from "react";
import "./Task.scss";
import {debounceTaskInput, addInputValue, ChangeTaskStatus} from "../../../../Helpers/AllHelpers.js";
import { useDispatch } from "react-redux";

const Task = ({ task, note }) => {
  const [changeStatus, setChangeStatus] = useState(false);

  const dispatch = useDispatch();

  const getTaskInput = (e) => {
    if (e.key === "Enter") {
      e.target.blur();

      addInputValue(note.id, task.id, e, dispatch)
    } else {
      debounceTaskInput(note.id, task.id, e, dispatch);
    }
  };

  const toggleStatus = useCallback(() => {
    setChangeStatus(prevState => prevState = !prevState);
    ChangeTaskStatus(note.id, task.id, !changeStatus, dispatch);
    
  }, [changeStatus, dispatch, note, task]);

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
