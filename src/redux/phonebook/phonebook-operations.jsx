import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchContactsAPI } from 'service';

export const setContacts = createAsyncThunk(
  'phonebook/fetchContacts',
  async () => {
    try {
      const response = await fetchContactsAPI.getContacts();
      return response.data;
    } catch (error) {
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
      throw error;
    }
  },
);

export const deleteContact = createAsyncThunk(
  'phonebook/deleteContact',
  async NoteId => {
    try {
      await fetchContactsAPI.deleteContact(NoteId);
      return NoteId;
    } catch (error) {
      throw error;
    }
  },
);

export const changeContact = createAsyncThunk(
  'phonebook/changeContact',
  async data => {
    try {
      const { id, changedContact } = data;
      const response = await fetchContactsAPI.changeContact(id, changedContact);
      return response;
    } catch (error) {
      throw error;
    }
  },
);
