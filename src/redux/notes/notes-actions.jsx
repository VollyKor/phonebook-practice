const { createAction } = require('@reduxjs/toolkit');

export const addNote = createAction('notes/addNote');
export const deleteNote = createAction('notes/deleteNote');
export const setNotes = createAction('notes/setNotes');
