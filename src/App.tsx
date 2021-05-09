import { useDispatch, useSelector } from 'react-redux';

import NewNoteInput from './components/NewNoteInput';
import { NotesStates } from './redux/notesReducer';

import { addNote } from './redux/actions';

function App() {
  // useSelector: A hook to access the redux store's state. This hook takes a selector function as an argument.
  // The selector is called with the store state.

  const notes = useSelector<NotesStates, NotesStates['notes']>(
    state => state.notes
  );

  // <NotesStates> : specify what's the type profile state
  // <NotesStates['notes']> : specify what's the type of return value of useSelector hook | after this, now notes is a array of strings

  // in redux, states updated by dispatch actions function
  // A hook to access the redux dispatch function.
  const dispatch = useDispatch();

  const addNoteCallback = (note: string) => {
    dispatch(addNote(note));
  };

  return (
    <main>
      <NewNoteInput addNote={addNoteCallback} />

      <hr />

      <div className="notesList">
        <ul>
          {notes.map((note, index) => (
            <li key={index}>{note}</li>
          ))}
        </ul>
      </div>
    </main>
  );
}

export default App;
