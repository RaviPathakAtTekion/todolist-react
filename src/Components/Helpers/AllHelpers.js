import { noteAction, taskAction, addTitle, closeNote, addInput, changeStatus, completeNote } from "../../redux/noteArray/ArrayActions.js";

// change notes array after data change
function changeNoteData(notes, changedNote, id) {
  const changedNoted = notes.map((note) => {
    if (note !== null && note.id === id) {
      return changedNote;
    } else {
      return note;
    }
  });
  return changedNoted;
}

// create new note
function createNewNote(id) {
  const time = new Date();

  const timeStamp = {
    time: time.toLocaleTimeString(),
    date: time.toLocaleDateString(),
  };
  const note = {
    title: "",
    timeStamp: timeStamp,
    id: "div" + id,
    tasks: [],
    completed: false,
  };
  return note;
}

// create new task
function createNewTask(id) {
  const task = {
    id: "Task" + id,
    status: false,
    content: "",
  };
  return task;
}

// Count Notes after Deleting
function countNotes(noteArray) {
  let counter = 0;
  noteArray.forEach((element) => {
    if (element !== null) {
      counter++;
    }
  });
  return counter;
}

// add Input value to Task 
function addInputValue (noteId, taskId, e, dispatch) {
  dispatch(addInput(noteId, taskId, e.target.value));
}
 
// Debounce Task Input
function getTaskInput(noteId, taskId, e, dispatch) {
  e.target.blur();
  dispatch(addInput(noteId, taskId, e.target.value));
}

function debounceTask(callback, delay = 2000) {
  let timer;
  return (...args) => {
    clearTimeout(timer);

    timer = setTimeout(() => {
      callback.apply(this, args);
    }, delay);
  };
}

const debounceTaskInput = debounceTask(
  (noteId, taskId, e, dispatch) =>
    getTaskInput(noteId, taskId, e, dispatch)
);

// close note with redux
function closeNoteRedux (id, dispatch) {
  dispatch(closeNote(id));
}

// add title to input redux
function addTitleToNote (note, dispatch, e) {
  dispatch(addTitle(note.id, e.target.value));
}

// Debounce Title Input
function getInput(note, e, dispatch) {
  e.target.blur();
  dispatch(addTitle(note.id, e.target.value));
}

function debounce(callback, delay = 2000) {
  let timer;
  return (...args) => {
    clearTimeout(timer);

    timer = setTimeout(() => {
      callback.apply(this, args);
    }, delay);
  };
}

const debounceInput = debounce((note, e, dispatch) =>
  getInput(note, e, dispatch)
);

// add note adder throttler with redux
const addNoteRedux = (notes, dispatch) => {
  const note = createNewNote(notes.length + 1);
  dispatch(noteAction(note));
};

function noteThrottlerRedux(callback, delay = 2000) {
  let flag = false;

  return (...args) => {
    if (flag) {
      return console.log("wait for adding note");
    }

    callback.apply(this, args);
    flag = true;

    setTimeout(() => {
      flag = false;
    }, delay);
  };
}

const addNoteThrottlerRedux = noteThrottlerRedux(
  (notes, dispatch) =>
    addNoteRedux(notes, dispatch)
);

// change status for task
function ChangeTaskStatus (noteId, taskId, status, dispatch) {
  dispatch(changeStatus(noteId, taskId, status));
}

// add task to note with throttler using redux
const addTaskRedux = (setTaskLength, note, dispatch) => {
  const task = createNewTask(note.tasks.length + 1);
  
  dispatch(taskAction(task, note.id));
  setTaskLength(note.tasks.length);
};

function taskThrottlerRedux(callback, delay = 2000) {
  let flag = false;

  return (...args) => {
    if (flag) {
      return console.log("wait for adding task");
    }

    callback.apply(this, args);
    flag = true;

    setTimeout(() => {
      flag = false;
    }, delay);
  };
}

const addTaskThrottlerRedux = taskThrottlerRedux(
  (setTaskLength, note, dispatch) => addTaskRedux(setTaskLength, note, dispatch)
);

// complete note status 
function completeNoteStatus (noteId, status, dispatch) {
  dispatch(completeNote(noteId, status))
}

export {
  addInputValue,
  changeNoteData,
  createNewNote,
  createNewTask,
  countNotes,
  ChangeTaskStatus,
  closeNoteRedux,
  addTitleToNote,
  debounceTaskInput,
  debounceInput,
  addNoteThrottlerRedux,
  addTaskThrottlerRedux,
  completeNoteStatus
};
