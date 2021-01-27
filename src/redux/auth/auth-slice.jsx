import { createSlice } from '@reduxjs/toolkit';
import { authOperations } from 'redux/auth';

const authReducer = createSlice({
  name: 'auth',
  initialState: {
    user: { name: null, email: null },
    token: '',
    isLoggedIn: false,
    extraReducers: {
      [authOperations.register.pending](state, payload) {
        console.log(state, payload);
      },
      [authOperations.register.fulfilled](state, payload) {
        console.log(state, payload);
      },
      [authOperations.register.rejected](state, payload) {
        console.log(state, payload);
      },

      [authOperations.login.pending](state, payload) {
        console.log(state, payload);
      },
      [authOperations.login.fulfilled](state, payload) {
        console.log(state, payload);
      },
      [authOperations.login.rejected](state, payload) {
        console.log(state, payload);
      },

      [authOperations.logout.pending](state, payload) {
        console.log(state, payload);
      },
      [authOperations.logout.fulfilled](state, payload) {
        console.log(state, payload);
      },
      [authOperations.logout.rejected](state, payload) {
        console.log(state, payload);
      },
    },
  },
});

export default authReducer.reducer;
