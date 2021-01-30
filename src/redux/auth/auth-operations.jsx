import { axiosPB } from 'service';
import { createAsyncThunk } from '@reduxjs/toolkit';

const token = {
  set(token) {
    axiosPB.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axiosPB.defaults.headers.common.Authorization = null;
  },
};

export const register = createAsyncThunk('auth/signup', async credential => {
  try {
    const { data } = await axiosPB.post('/users/signup', credential);
    token.set(data.token);
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
});

export const login = createAsyncThunk('auth/login', async credentials => {
  try {
    const { data } = await axiosPB.post('/users/login', credentials);
    token.set(data.token);
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
});

export const logout = createAsyncThunk('auth/logout', async () => {
  try {
    await axiosPB.post('/users/logout');
    token.unset();
  } catch (error) {
    console.log(error);
    throw error;
  }
});

export const getUser = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {
  try {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return;
    }
    token.set(persistedToken);

    const user = await axiosPB.get('/users/current');
    return user.data;
  } catch (error) {
    throw error;
  }
});
