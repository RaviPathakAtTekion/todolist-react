
// change notes array after data change
function changeNoteData (notes, changedNote, id) {
  const changedNoted = notes.map((note) => {
      if (note !== null && note.id === id) {
        return changedNote;
      } else {
        return note;
      }
  });
  return changedNoted;
};


// create new note
function createNewNote (id) {
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
};


// create new task 
function createNewTask (id) {
  const task = {
    id: "Task" + id,
    status: false,
    content: "",
  };
  return task;
};


// Count Notes after Deletin
function countNotes (noteArray) {
  let counter = 0;
  noteArray.forEach(element => {
      if(element !== null){
          counter++;
      }
  });
  return counter;
};


// Debounce Task Input
function getTaskInput(e, taskId, newNote, updatesNotesTaskArray) {
  e.target.blur();
  taskId.content = e.target.value;
  updatesNotesTaskArray(newNote, newNote.id);
}

function debounceTask(callback, delay = 1000) {
  let timer;
  return (...args) => {
    clearTimeout(timer);

    timer = setTimeout(() => {
      callback.apply(this, args);
    }, delay);
  };
}

const debounceTaskInput = debounceTask((e, taskId, newNote, updatesNotesTaskArray) =>
  getTaskInput(e, taskId, newNote, updatesNotesTaskArray)
);


// Debounce Title Input
function getInput(note, e, updatesNotesTaskArray) {
  e.target.blur();

  updatesNotesTaskArray({ ...note, title: e.target.value }, note.id);
}

function debounce(callback, delay = 1000) {
  let timer;
  return (...args) => {
    clearTimeout(timer);

    timer = setTimeout(() => {
      callback.apply(this, args);
    }, delay);
  };
}

const debounceInput = debounce((note, e, updatesNotesTaskArray) =>
  getInput(note, e, updatesNotesTaskArray)
);


// throttle add button
const addNote = (setNewNote, setNoteLength, notes) => {
  const note = createNewNote(notes.length + 1);
  
    setNewNote([...notes, note]);

    const newNoteLength = countNotes(notes);

    setNoteLength(newNoteLength + 1);
};

function noteThrottler(callback, delay = 2000) {
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

const addNoteThrottler = noteThrottler(
  (setNewNote, setNoteLength, notes) =>
    addNote(setNewNote, setNoteLength, notes)
);


// add task throttler
const addTask = (updatesNotesTaskArray, setTaskLength, note) => {
  const task = createNewTask(note.tasks.length + 1);
    updatesNotesTaskArray({ ...note, tasks: [...note.tasks, task] }, note.id);
    setTaskLength(note.tasks.length + 1);
};

function taskThrottler(callback, delay = 2000) {
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

const addTaskThrottler = taskThrottler(
  (updatesNotesTaskArray, setTaskLength, note) =>
    addTask(updatesNotesTaskArray, setTaskLength, note)
);

export {changeNoteData, createNewNote, createNewTask, countNotes, debounceTaskInput, debounceInput, addNoteThrottler, addTaskThrottler};
