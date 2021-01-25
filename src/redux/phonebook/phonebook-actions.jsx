const { createAction } = require('@reduxjs/toolkit');

export const addContact = createAction('phonebook/addContact');
export const deleteContact = createAction('phonebook/deleteContact');
export const setContact = createAction('phonebook/setContacts');
