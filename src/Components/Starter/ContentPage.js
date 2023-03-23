import { useState, useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";

import "./ContentPage.scss";
import MainContent from "./MainContent/MainContent.js";
import { changeNoteData } from "../Helpers/AllHelpers.js";
import { countNotes } from "../Helpers/AllHelpers.js";
import { addNoteThrottlerRedux } from "../Helpers/AllHelpers.js";

function ContentPage() {
  const [noteLength, setNoteLength] = useState(0);

  const notes = useSelector(state => state.notes);
  const dispatch = useDispatch();

  useEffect(() => {}, [notes, noteLength]);

  const changeNotesData = useCallback(
    (changedNote, id) => {
      const newNoteArray = changeNoteData(notes, changedNote, id);

      const newNoteLength = countNotes(newNoteArray);

      setNoteLength(newNoteLength);
    },
    [notes]
  );

  const callThrottler = () => {
    addNoteThrottlerRedux(notes, dispatch, setNoteLength);
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
