
import { useDispatch, useSelector } from "react-redux";

import "./ContentPage.scss";
import MainContent from "./MainContent/MainContent.js";
import { addNoteThrottlerRedux } from "../Helpers/AllHelpers.js";

function ContentPage() {

  const notes = useSelector((state) => state.notes);
  const dispatch = useDispatch();

  const callThrottler = () => {
    addNoteThrottlerRedux(notes, dispatch);
  };

  return (
    <main>
      <h3 className="notes--heading">Add Notes on The Go</h3>
      <MainContent
        notes={notes}
        addNote={callThrottler}
      />
    </main>
  );
}

export default ContentPage;
