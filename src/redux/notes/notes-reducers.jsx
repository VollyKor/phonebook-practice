import { combineReducers, createReducer } from '@reduxjs/toolkit';
import { notesOperations } from 'redux/notes';

const { fetchNotes, addNote, deleteNote, changeNote } = notesOperations;

const notesListReducer = createReducer([], {
  [fetchNotes.fulfilled]: (_, { payload }) => payload,

  [addNote.fulfilled]: (state, { payload }) => {
    console.log(payload);
    return [...state, payload];
  },

  [deleteNote.fulfilled]: (state, { payload }) => {
    return state.filter(e => e.id !== payload);
  },

  [changeNote.fulfilled]: (state, { payload }) => {
    return state.map(e => (e.id !== payload.id ? e : payload));
  },
});

const notesReducer = combineReducers({
  entities: notesListReducer,
});

export default notesReducer;
