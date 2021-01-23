import { createAsyncThunk } from '@reduxjs/toolkit';
import { request } from 'service';

export const fetchNotes = createAsyncThunk('notes/fetchNotes', async () => {
  try {
    const response = await request.getNotes();
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
});

export const addNote = createAsyncThunk('notes/addNote', async newNote => {
  try {
    const response = await request.addNote(newNote);
    console.log(response);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
});

export const deleteNote = createAsyncThunk('notes/deleteNote', async NoteId => {
  try {
    const response = await request.deleteNote(NoteId);
    return response;
  } catch (error) {
    console.log(error);
    throw error;
  }
});

export const changeNote = createAsyncThunk(
  'notes/changeNote',
  async (NoteId, changedObj) => {
    try {
      const response = await request.changeNote(NoteId, changedObj);
      return response.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  },
);
