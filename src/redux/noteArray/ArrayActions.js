const noteAction = (data) => {
  return {
    type: "ADD_NOTE",
    description: "add note to note array",
    payload: data,
  };
};

const taskAction = (data, id) => {

  return {
    type: "ADD_TASK",
    description: "add task to specific note",
    payload: data,
    noteId: id,
  };
};

const addTitle = (id, data) => {
  console.log(id, data);
  
  return {
    type: "ADD_TITLE",
    description: "add title to specific note",
    payload: data,
    noteId: id,
  }
}

const closeNote = (id) => {
  return {
    type: "CLOSE_NOTE",
    description: "close the note specificed",
    payload: null,
    noteId: id
  }
}

const addInput = (noteId, taskId, data) => {
  return {
    type: "ADD_INPUT",
    description: "add input value to specific note",
    payload: data,
    noteId: noteId, 
    taskId: taskId,
  }
}

const changeStatus = (noteId, taskId, status) => {
  return {
    type: "CHANGE_STATUS",
    description: "change task status in specific note",
    payload: status,
    noteId: noteId,
    taskId: taskId,
  }
}

const completeNote = (noteId, status) => {
  return {
    type: "CHANGE_NOTE_STATUS",
    description: "change the note status",
    payload: status,
    noteId: noteId,
  }
}

export { noteAction, taskAction, addTitle, closeNote, addInput, changeStatus, completeNote };
