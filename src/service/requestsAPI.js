import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:4040';

export const getNotes = async () => {
  try {
    const response = await axios.get('/notes');
    return response;
  } catch (error) {
    throw error;
  }
};

export const addNote = async contactObj => {
  try {
    const response = await axios.post('/notes', contactObj);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const deleteNote = async ObjId => {
  try {
    await axios.delete(`/notes/${ObjId}`);
    return ObjId;
  } catch (error) {
    throw error;
  }
};

export const changeNote = async (ObjId, changedObj) => {
  try {
    const response = await axios.patch(`/notes/${ObjId}`, changedObj);
    console.log('patch response', response);
    return response.data;
  } catch (error) {
    throw error;
  }
};
