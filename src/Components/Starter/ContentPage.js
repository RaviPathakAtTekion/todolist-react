import { useState, useEffect, useCallback } from "react";

import "./ContentPage.scss";
import MainContent from "./MainContent/MainContent.js";
import { changeNoteData } from "../Helpers/AllHelpers.js";
import { countNotes } from "../Helpers/AllHelpers.js";
import { addNoteThrottler } from "../Helpers/AllHelpers.js";

function ContentPage() {
  const [notes, setNewNote] = useState([]);
  const [noteLength, setNoteLength] = useState(0);

  useEffect(() => {}, [notes, noteLength]);

  const changeNotesData = useCallback(
    (changedNote, id) => {
      const newNoteArray = changeNoteData(notes, changedNote, id);
      setNewNote([...newNoteArray]);

      const newNoteLength = countNotes(newNoteArray);

      setNoteLength(newNoteLength);
    },
    [notes]
  );

  const callThrottler = () => {
    addNoteThrottler(setNewNote, setNoteLength, notes);
  };

  return (
    <main>
      <h3 className="notes--heading">Add Notes on The Go</h3>
        <MainContent
          notes={notes}
          noteLength={noteLength}
          changeNotesData={changeNotesData}
          addNote={callThrottler}
        />
    </main>
  );
}

export default ContentPage;
