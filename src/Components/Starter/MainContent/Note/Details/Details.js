import React from "react";
import "./Details.scss";

function Details({createTask, note}){
  
    return (
        <div className="button--time--style">
        <button
          className="addButton--note"
          type="button"
          onClick={createTask}
          id={note.id + "button"}
        >
          Add
        </button>
        <p className="getTime">
          Time: {note.timeStamp.time} <br></br>
          Date: {note.timeStamp.date}
        </p>
      </div>
    )
}

export default React.memo(Details);