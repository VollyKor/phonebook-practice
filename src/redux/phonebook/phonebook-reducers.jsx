import { combineReducers, createReducer } from '@reduxjs/toolkit';
import { contactsOperations } from 'redux/phonebook';

const {
  setContacts,
  addContact,
  deleteContact,
  changeContact,
} = contactsOperations;

const ContactListReducer = createReducer([], {
  [setContacts.fulfilled]: (_, { payload }) => payload,

  [addContact.fulfilled]: (state, { payload }) => {
    console.log(payload);
    return [...state, payload];
  },

  [deleteContact.fulfilled]: (state, { payload }) => {
    return state.filter(e => e.id !== payload);
  },

  [changeContact.fulfilled]: (state, { payload }) => {
    return state.map(e => (e.id !== payload.id ? e : payload));
  },
});

const phonebookReducer = combineReducers({
  entities: ContactListReducer,
});

export default phonebookReducer;
