import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { phonebookReducer } from 'redux/phonebook';
import { notesReducer } from 'redux/notes';
import logger from 'redux-logger';

const middleware = [...getDefaultMiddleware(), logger];

const store = configureStore({
  reducer: {
    notes: notesReducer,
    phonebook: phonebookReducer,
  },
  devTools: process.env.NODE_ENV === 'development',
  middleware,
});

export default store;
