import React, { ChangeEvent, useState } from 'react';

interface INoteProps {
  addNote(note: string): void;
}

const NewNoteInput: React.FC<INoteProps> = ({ addNote }) => {
  const [note, setNote] = useState('');

  const updateNote = (event: ChangeEvent<HTMLInputElement>) => {
    setNote(event.target.value);
  };

  const addNoteOnClick = () => {
    addNote(note);
    setNote('');
  };

  return (
    <div className="input">
      <input
        value={note}
        onChange={updateNote}
        type="text"
        name="note"
        placeholder="type your note"
      />

      <button onClick={addNoteOnClick} type="button">
        Add note
      </button>
    </div>
  );
};

export default NewNoteInput;
