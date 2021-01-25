import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchContactsAPI } from 'service';

export const setContacts = createAsyncThunk(
  'phonebook/fetchContacts',
  async () => {
    try {
      const response = await fetchContactsAPI.getContacts();
      return response.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  },
);

export const addContact = createAsyncThunk(
  'phonebook/addContact',
  async newNote => {
    try {
      const response = await fetchContactsAPI.addContact(newNote);
      return response.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  },
);

export const deleteContact = createAsyncThunk(
  'phonebook/deleteContact',
  async NoteId => {
    try {
      const response = await fetchContactsAPI.deleteContact(NoteId);
      return response;
    } catch (error) {
      console.log(error);
      throw error;
    }
  },
);

export const changeContact = createAsyncThunk(
  'phonebook/changeContact',
  async (NoteId, changedObj) => {
    try {
      const response = await fetchContactsAPI.changeContact(NoteId, changedObj);
      return response.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  },
);
