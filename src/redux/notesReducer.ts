import { Action } from './actions';

export interface NotesStates {
  notes: string[];
}

const initialState = {
  notes: [],
};

// in redux, reducer is arrow function that calculate the new value for your state

// no redux, reducer é uma função que calcula o novo valor para o seu estado
// a função reducer recebe o estado inicial e a ação à ser feita (que vai mudar o estado)

export const notesReducer = (
  state: NotesStates = initialState,
  action: Action
) => {
  switch (action.type) {
    case 'ADD_NOTE':
      return { ...state, notes: [...state.notes, action.payload] };

    default:
      return state;
  }
};
