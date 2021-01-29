import { axiosPB } from './axiosInstances';

export const getContacts = async () => {
  try {
    const response = await axiosPB.get('/contacts');
    return response;
  } catch (error) {
    throw error;
  }
};

export const addContact = async contactObj => {
  try {
    const response = await axiosPB.post('/contacts', contactObj);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const deleteContact = async ObjId => {
  try {
    await axiosPB.delete(`/contacts/${ObjId}`);
    return ObjId;
  } catch (error) {
    throw error;
  }
};

export const changeContact = async (ObjId, changedObj) => {
  try {
    const response = await axiosPB.patch(`/contacts/${ObjId}`, changedObj);
    console.log('patch response', response);
    return response.data;
  } catch (error) {
    throw error;
  }
};
