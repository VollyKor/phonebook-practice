import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import logger from 'redux-logger';
import { notesReducer } from 'redux/notes';
// import noteReducer from './phonebook/phonebook-reducer';

const middleware = [...getDefaultMiddleware(), logger];

const store = configureStore({
  reducer: {
    notes: notesReducer,
  },
  devTools: process.env.NODE_ENV === 'development',
  middleware,
});

export default store;
