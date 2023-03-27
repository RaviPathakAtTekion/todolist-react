const initialNoteArrayState = {
  notes: [],
};

const ArrayReducer = (state = initialNoteArrayState, action) => {
  switch (action.type) {
    case "ADD_NOTE":
      return {
        ...state,
        notes: [...state.notes, action.payload],
      };
    case "ADD_TASK": {
      const newState = JSON.parse(JSON.stringify(state));

      newState.notes[action.noteId.substring(3) - 1].tasks = [
        ...newState.notes[action.noteId.substring(3) - 1].tasks,
        action.payload,
      ];
      return newState;
    }
    case "ADD_TITLE": {
      const newState = JSON.parse(JSON.stringify(state));

      newState.notes[action.noteId.substring(3) - 1].title = action.payload;
      return newState;
    }
    case "CLOSE_NOTE": {
      const newState = JSON.parse(JSON.stringify(state));

      newState.notes[action.noteId.substring(3) - 1] = null;
      return newState;
    }
    case "ADD_INPUT": {
      const newState = JSON.parse(JSON.stringify(state));
      newState.notes[action.noteId.substring(3) - 1].tasks[
        action.taskId.substring(4) - 1
      ].content = action.payload;

      return newState;
    }
    case "CHANGE_STATUS": {
      const newState = JSON.parse(JSON.stringify(state));
      newState.notes[action.noteId.substring(3) - 1].tasks[
        action.taskId.substring(4) - 1
      ].status = action.payload;

      return newState;
    }
    case "CHANGE_NOTE_STATUS": {
      const newState = JSON.parse(JSON.stringify(state));
      newState.notes[action.noteId.substring(3) - 1].completed = action.payload;

      return newState;
    }
    // case "NOTE_LENGTH": {
    //   const count = state.notes.filter((note) => {
    //     if (note != null && note !== true) return true;
    //     else return false;
    //   });
    //   return count;
    // }

    default:
      return state;
  }
};

export default ArrayReducer;
